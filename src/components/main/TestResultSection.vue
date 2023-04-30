<script>
import CallButton from "../buttons/CallButton.vue";
import ResultInfo from "./ResultInfo.vue";
import ResultError from "./ResultError.vue";
import Terms from "./Terms.vue";

export default {
    components: {
        CallButton,
        ResultInfo,
        ResultError,
        Terms
    },
    data() {
        return {
            minutes: 10,
            seconds: 0,
            resultData: null,
            resultError: null,
            resultItems: null,
            isConvertData: false
        }
    },
    methods: {
        timer() {
            setTimeout(() => {
                if (this.seconds === 1 && this.minutes === 0) {
                    clearTimeout(this.timer());
                    location.reload();
                } else if (this.seconds === 0) {
                    this.minutes -= 1;
                    this.seconds = 60;
                }
                --this.seconds;
                this.timer();
            }, 1000)
        },
        fetchData(URL) {
            return fetch(URL)
                .then((response) => response.json())
                .then((data) => {
                    this.isConvertData = true;
                    return data.name || data.title;
                });
        },
        async getResultData() {
            try {
                await fetch("https://swapi.dev/api/people/1/")
                    .then((response) => response.json())
                    .then((data) => {
                        this.resultData = data;
                        this.resultItems = Object.keys(data);
                        this.isConvertData = false;
                        return data;
                    })
                    .then(data => {
                        this.resultItems.map(async (item) => {
                            if (typeof data[item] === "object" && data[item]) {
                                const promises = data[item].map(async (elemUrl) => {
                                    return await this.fetchData(elemUrl)
                                });
                                const result = await Promise.all(promises);
                                this.resultData[item] = result;
                            } else if (item === "homeworld") {
                                const result = await this.fetchData(data[item])
                                this.resultData[item] = result;
                            }
                        })
                    });
            } catch (error) {
                this.resultError = "Упс, случилась ошибка!";
            }
        }
    },
    mounted() {
        this.timer();
    }
}
</script>

<template>
    <section class="grid-content-full grid-container result-section">
        <img class="lightning" src="../../assets/images/lightning.png" />
        <img class="lightning" src="../../assets/images/lightning.png" />
        <div class="grid-content">
            <p class="result__title">Ваш результат рассчитан:</p>
            <p class="result__text">
                <span>Вы относитесь к 3%</span> респондентов, чей уровень интеллекта более чем на
                15 пунктов отличается от среднего в большую или меньшую сторону!
            </p>
            <p class="result__get-msg">Скорее получите свой результат!</p>
            <div class="result__attention-msg">
                В целях защиты персональных данных результат теста, их подробная интерпретация
                и рекомендации доступны в виде голосового сообщения по звонку с вашего
                мобильного телефона
            </div>
            <div class="timer">Звоните скорее, запись доступна всего <p>{{ this.minutes }}:{{ this.seconds < 10 ? "0" +
                this.seconds : this.seconds }} минут</p>
            </div>
            <CallButton @getResult="getResultData" />
            <ResultInfo v-if="isConvertData" :resultData="resultData" :resultItems="resultItems" />
            <ResultError v-else-if="resultError" :resultError="resultError" />
        </div>
        <Terms />
    </section>
</template>
  
<style scoped>
.result-section {
    background-image: url("../../assets/images/galaxy.png");
    min-height: calc(100vh - var(--header-mobile-height));
    background-position: center;
    background-size: cover;
    font-family: "PTSerif-Regular";
    color: var(--clr-white);
    text-align: center;
    overflow-x: hidden;
}

.result-section>div {
    padding: 40px 0 60px 0;
}

.result__title {
    font-size: 15px;
    line-height: 16px;
}

.result__title,
.result__get-msg {
    font-family: "PTSerif-Bold";
    letter-spacing: var(--letter-spacing-md);
    text-transform: uppercase;
    margin-bottom: 15px;
}

.result__text {
    max-width: 800px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 20px;
}

.result__text span {
    text-decoration-line: underline;
}

.result__get-msg {
    font-size: 18px;
    line-height: 22px;
    color: var(--clr-progress);
}

.result__attention-msg {
    width: 90%;
    max-width: 800px;
    background: var(--clr-warning-bg);
    border-radius: 6px;
    padding: 15px;
    margin: 0 auto 10px auto;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.timer {
    font-size: 11px;
    line-height: 30px;
    letter-spacing: var(--letter-spacing-md);
    color: var(--clr-progress);
    margin-bottom: 10px;
}

.timer p {
    font-size: 20px;
    line-height: 30px;
}

.lightning {
    position: absolute;
    width: 165px;
    height: 265px;
}

.lightning:first-of-type {
    transform: rotateY(180deg) rotate(53deg);
    top: 20%;
    left: -100px;
}

.lightning:last-of-type {
    transform: rotate(53deg);
    top: 10%;
    right: -100px;
}

@media (min-width: 768px) {
    .result-section {
        min-height: calc(100vh - var(--header-height));
    }

    .result__title {
        font-size: 25px;
        line-height: 36px;
    }

    .result__title,
    .result__get-msg {
        margin-bottom: 20px;
    }

    .result__text {
        font-size: 20px;
        line-height: 24px;
    }

    .result__get-msg {
        font-size: 26px;
        line-height: 30px;
    }

    .result__attention-msg {
        font-size: 15px;
        line-height: 20px;
    }

    .timer {
        font-size: 15px;
        margin-bottom: 20px;
    }

    .timer p {
        font-size: 25px;
        line-height: 30px;
    }

    .lightning {
        width: 25%;
        height: auto;
    }

    .lightning:first-of-type {
        top: 0;
        left: 0;
        transform: rotateY(180deg) rotate(0) translateX(0);
    }

    .lightning:last-of-type {
        right: 0;
        transform: rotate(0) translateX(0);
    }
}
</style>