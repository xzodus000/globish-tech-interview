<template>
  <div id="app">
    <div v-if="!beginQuest">
      <BackgroundImageComponent @begin-question="handleBeginQuest" />
    </div>
    <div v-if="!showResult && beginQuest" class="test-container">
      <PersonalityTest
        :question="questions[currentQuestionIndex]"
        :myAnswer="myAnswer"
        @answer-selected="handleAnswerSelected"
        @answer-where="handleWhere"
        @another-where="handleAnotherWhere"
        @my-answer-change="handleMyAnswerChange"
        @next-quest="nextQuestion"
        @active-next="activeNextBTN"
        @deactive-next="deactiveNextBTN"
      />
      <div class="button-container">
        <button
          v-if="currentQuestionIndex > 0"
          @click="previousQuestion"
          class="nav-button prev"
        >
          Previous
        </button>
        <button
          @click="nextQuestion"
          class="nav-button next"
          :disabled="nextBTN"
        >
          Next
        </button>
      </div>
    </div>
    <div class="test-container">
      <ResultComponent
        v-if="showResult"
        :score="score"
        :where="where"
        :another="anotherWhere"
        :myAnswer="myAnswer"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PersonalityTest from "./pages/PersonalityTest.vue";
import ResultComponent from "./pages/ResultComponent.vue";
import BackgroundImageComponent from "./pages/BackgroundImageComponent.vue";
import { questions } from "./interface/questions";

export default defineComponent({
  components: {
    PersonalityTest,
    ResultComponent,
    BackgroundImageComponent,
  },
  setup() {
    const beginQuest = ref(false);
    const currentQuestionIndex = ref(0);
    const score = ref(0);
    const nextBTN = ref(true);
    const showResult = ref(false);
    const anotherWhere = ref("");
    const where = ref([false, false, false]);
    const myAnswer = ref([0, 0, 0, 0, 0, 0]);
    const handleAnswerSelected = (selectedScore: number) => {
      score.value += selectedScore;
      // nextQuestion();
    };
    const handleAnotherWhere = (data: string) => {
      if (data) {
        nextBTN.value = false;
      }
      anotherWhere.value = data;
    };

    const activeNextBTN = () => {
      nextBTN.value = false;
    };
    const deactiveNextBTN = () => {
      nextBTN.value = true;
    };

    const handleMyAnswerChange = (posistion: number, score: number) => {
      console.log("🚀 ~ handleMyAnswerChange ~ posistion:", posistion);
      console.log("🚀 ~ handleMyAnswerChange ~ score:", score);
      myAnswer.value[posistion] = score;
      console.log("🚀 ~ handleMyAnswerChange ~ myAnswer.valu:", myAnswer.value);
      // nextBTN.value = false;
    };

    const resetMyAnswer = () => {
      for (let index = 0; index < myAnswer.value.length; index++) {
        myAnswer.value[index] = 0;
      }
    };

    const handleWhere = (posistion: number) => {
      nextBTN.value = false;
      where.value[posistion] = !where.value[posistion];
      if (where.value[2] && anotherWhere.value === "") {
        nextBTN.value = true;
      }
      console.log("🚀 ~ handleWhere ~ where:", where.value);
    };

    const handleBeginQuest = () => {
      beginQuest.value = true;
    };

    const nextQuestion = () => {
      nextBTN.value = true;
      if (currentQuestionIndex.value < questions.length - 1) {
        currentQuestionIndex.value++;
      } else {
        showResult.value = true;
      }
    };

    const previousQuestion = () => {
      if (currentQuestionIndex.value > 0) {
        currentQuestionIndex.value--;
        // Optionally adjust score if needed
      }
    };

    return {
      currentQuestionIndex,
      questions,
      score,
      showResult,
      beginQuest,
      handleAnswerSelected,
      previousQuestion,
      nextQuestion,
      handleBeginQuest,
      handleWhere,
      where,
      handleAnotherWhere,
      anotherWhere,
      myAnswer,
      handleMyAnswerChange,
      resetMyAnswer,
      nextBTN,
      activeNextBTN,
      deactiveNextBTN,
    };
  },
});
</script>

<style>
.button-container {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.test-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 720px;
}
.nav-button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  /* background-color: #4a90e2; */
  border-radius: 20px;
  border: 1px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 10px;
  border: 1px solid #000000;
}

/* .nav-button:hover {
  background-color: #357abd;
} */

/* You might want to add :focus styles for accessibility */
/* .nav-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.5);
} */
button {
  margin: 5px;
  /* Adjust spacing around buttons */
  /* Rest of the button styles */
}
#app {
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.next {
  width: 199px;
  height: 40px;
  background-color: #f7c116;
  color: #000000;
}
.prev {
  width: 96px;
  height: 40px;
  background-color: #fffaf5;
  color: #000000;
}
.disable {
  background-color: #808080 !important;
}
</style>
