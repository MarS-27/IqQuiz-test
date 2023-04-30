<script>
import MainButton from "../buttons/MainButton.vue";
import MoreButton from "../buttons/MoreButton.vue";

export default {
    components: {
        MainButton,
        MoreButton,
    },
}
</script>

<template>
    <section class="grid-content-full grid-container intro-section">
        <div class="grid-content">
            <p class="intro__sub-title">Пройдите точный и быстрый</p>
            <h1 class="intro__title">Тест на определение IQ</h1>
        </div>
        <div class="grid-content">
            <MainButton :btnName="'Пройти тест'" />
            <div class="intro__text">
                <p>И получите рекомендации по развитию своего интеллекта</p>
                <p>и улучшению финансового благосостояния и личной жизни</p>
            </div>
            <MoreButton />
        </div>
    </section>
</template>
  
<style scoped>
.intro-section {
    justify-items: center;
    align-content: space-between;
    height: calc(100vh - var(--header-mobile-height));
    padding: 30px 0 10px 0;
    text-align: center;
    color: var(--clr-white);
    background-image: url("../../assets/images/intro-bg.png");
    background-position: center 20%;
    background-size: cover;
}

.intro__sub-title {
    font-family: "PTSerif-Regular";
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 20px;
}

.intro__title {
    max-width: 270px;
    font-family: "YesevaOne-Regular";
    font-size: 30px;
    line-height: 35px;
    color: var(--clr-important-element);
    text-transform: uppercase;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.intro__text {
    max-width: 290px;
    margin: 20px 0;
    font-family: "PTSerif-Bold";
    font-size: 15px;
    line-height: 19px;
}

.intro__text p:first-of-type {
    color: var(--clr-important-element);
}

@media (min-width: 768px) {
    .intro-section {
        height: calc(100vh - var(--header-height));
        background-position: center 35%;
    }

    .intro__sub-title {
        font-size: 28px;
        line-height: 34px;
    }

    .intro__title {
        max-width: 100%;
        font-size: 40px;
        line-height: 45px;
    }

    .intro__text {
        max-width: 100%;
        font-size: 25px;
        line-height: 29px;
    }
}
</style>