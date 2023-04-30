<script>
import MainButton from "../buttons/MainButton.vue";
import Question from "./Question.vue";
import CheckTest from "./CheckTest.vue";
import { QUESTIONS } from "../../questions/questions";

export default {
    components: {
        MainButton,
        Question,
        CheckTest
    },
    data() {
        return {
            QUESTIONS,
            progressWidth: 0,
            progressBtnDisabled: true,
            isTestStatus: "start"
        }
    },
    inject: ["questionNumber", "testStatus"],
    watch: {
        questionNumber(newVal) {
            this.progressWidth = 260 / QUESTIONS.length * newVal;
        },
        testStatus(newVal) {
            this.isTestStatus = newVal;
        }
    },
}
</script>

<template>
    <section class="grid-content-full test-section">
        <div class="test__progress">
            <div :style="isTestStatus === 'start' ? { width: progressWidth + 'px' } : { width: '260px' }"></div>
        </div>
        <CheckTest v-if="isTestStatus !== 'start'" />
        <template v-else>
            <Question @btnEnabled="progressBtnDisabled = false" />
            <MainButton :btnName="'Далее'" :progressBtnDisabled="progressBtnDisabled"
                @btnEnabled="progressBtnDisabled = true" />
        </template>
    </section>
</template>
  
<style scoped>
.test-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    height: calc(100vh - var(--header-mobile-height));
    padding: 20px 0 25px 0;
    text-align: center;
    background-image: url("../../assets/images/galaxy.png");
    background-position: center;
    background-size: cover;
}

.test__progress {
    width: 260px;
    height: 11px;
    background-color: rgb(242, 243, 243, .6);
    border-radius: 10px;
}

.test__progress div {
    max-width: 260px;
    height: 11px;
    background-color: var(--clr-progress);
    border-radius: 10px;
}

@media (min-width: 768px) {
    .test-section {
        height: calc(100vh - var(--header-height));
    }
}
</style>