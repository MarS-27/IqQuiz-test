<script>
import Header from "./components/header/Header.vue";
import Main from "./components/main/Main.vue";
import { computed } from 'vue';
import { QUESTIONS } from "./questions/questions.js";

export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {
      QUESTIONS,
      testStatus: "ready",
      questionNumber: 0,
    }
  },
  methods: {
    btnClick(btnName) {
      if (btnName === "Пройти тест") {
        this.testStatus = "start";
        this.questionNumber = 0;
      } else if (btnName === "Главная" || btnName === "Информация о тесте") {
        this.testStatus = "ready";
      } else if (btnName === "Далее") {
        this.questionNumber >= QUESTIONS.length - 1 ? this.testStatus = "check" : this.questionNumber++;
      }
    }
  },
  provide() {
    return {
      btnClick: this.btnClick,
      testStatus: computed(() => this.testStatus),
      questionNumber: computed(() => this.questionNumber)
    }
  },
  watch: {
    testStatus(newVal) {
      if (newVal === "check") {
        setTimeout(() => {
          this.testStatus = "finish"
        }, 2000)
      }
    }
  },
}
</script>

<template>
  <Header :testStatus="testStatus" />
  <Main :testStatus="testStatus" />
</template>

<style scoped></style>
