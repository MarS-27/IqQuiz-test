<script>
import { QUESTIONS } from "../../questions/questions";

export default {
    data() {
        return {
            QUESTIONS,
            currentQuestion: QUESTIONS[0],
            activeAnswer: "",
        }
    },
    inject: ["questionNumber"],
    watch: {
        questionNumber(newVal) {
            this.currentQuestion = QUESTIONS[newVal];
        }
    },
    methods: {
        onClick(answer) {
            this.activeAnswer = answer;
            this.$emit('btnEnabled');
        }
    }
}
</script>

<template>
    <div class="question">
        <p class="question__title">{{ currentQuestion.question }}</p>
        <img v-if="currentQuestion.img" :src="currentQuestion.img" alt="test-image" />
        <ul :class="'answers__list_' + currentQuestion.answerType">
            <li :class="[answer === this.activeAnswer ? 'answer-active__' + currentQuestion.answerType : 'answer__' + currentQuestion.answerType]"
                :style="currentQuestion.answerType === 'color' && { backgroundColor: answer }"
                v-for="answer in currentQuestion.answers" :key="answer" @click="this.onClick(answer)">
                <span>{{ currentQuestion.answerType !== 'color' ? answer : '' }}</span>
            </li>
        </ul>
    </div>
</template>
  
<style scoped>
.question {
    width: 100%;
    max-width: 768px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    font-family: "PTSerif-Regular";
    color: var(--clr-white);
}

.question li {
    cursor: pointer;
}

.question img {
    width: 50%;
    align-self: center;
}

.question__title {
    align-self: center;
    max-width: 90%;
    font-size: 20px;
    line-height: 26px;
}

.answers__list_string {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 18px;
    line-height: 26px;
}

.answers__list_color {
    align-self: center;
    display: grid;
    grid-template-columns: repeat(3, 75px);
    grid-template-rows: repeat(3, 75px);
    gap: 20px;
}

.answers__list_number {
    display: flex;
    justify-content: space-evenly;
    margin-top: 25px;
}

.answers__list_number::before {
    content: "";
    position: absolute;
    top: -25px;
    width: 100%;
    height: 4px;
    background: var(--clr-light);
    opacity: 0.15;
}

.answer__string,
.answer-active__string {
    padding: 15px 30px 15px 80px;
    text-align: left;
}

.answer__string {
    background-color: rgb(242, 243, 243, .15);

}

.answer-active__string {
    background-color: var(--clr-important-element);
}

.answer__string span::before,
.answer-active__string span::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: -50px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border: 1px solid var(--clr-white);
    border-radius: 50%;
    border-style: solid;
    border-width: 1px;
}

.answer__string span::before {
    border-color: var(--clr-white);
}

.answer-active__string span::before {
    border-color: var(--clr-dark);
    background-color: var(--clr-selected-answer);
}

.answer__color,
.answer-active__color {
    width: 100%;
    height: 100%;
}

.answer__number,
.answer-active__number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background-color: var(--clr-white);
    color: var(--clr-enabled-button-text);
    font-size: 20px;
    line-height: 42px;
}

.answer-active__color,
.answer-active__number {
    border: 6px solid var(--clr-important-element);
}

@media (min-width: 768px) {
    .question img {
        width: 20%;
    }

    .question__title {
        font-size: 25px;
        line-height: 30px;
    }

    .answers__list_string {
        font-size: 20px;
        line-height: 24px;
    }
}
</style>