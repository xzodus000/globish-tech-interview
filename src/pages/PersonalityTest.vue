<template>
  <div class="question-container">
    <div class="wrapper">
      <div class="quest-num">Q{{ question.id }}</div>
      <h2>{{ question.text }}</h2>
      <div v-if="question.id !== 7" class="choice-container">
        <ul>
          <li
            v-for="(choice, index) in question.choices"
            :key="index"
            @click="selectAnswer(choice.score, question.id, choice.text)"
            class="answer"
            :class="
              selectedChoice(question.id - 1, choice.score) ? 'active' : ''
            "
          >
            {{ choice.text }}
          </li>
        </ul>
      </div>
      <div v-if="question.id === 7" class="choice-container">
        <ul>
          <li
            :key="1"
            @click="selectAnswer(0, 7, 'Instagram')"
            class="answer"
            :class="first ? 'active' : ''"
          >
            Instagram
          </li>
          <li
            :key="2"
            @click="selectAnswer(0, 7, 'Facebook')"
            class="answer"
            :class="second ? 'active' : ''"
          >
            Facebook
          </li>
          <li
            :key="3"
            @click="selectAnswer(0, 7, 'อื่นๆ (โปรดระบุ)')"
            class="answer"
            :class="third ? 'active' : ''"
          >
            อื่นๆ (โปรดระบุ)
          </li>

          <input
            v-if="third"
            type="text"
            id="inputField"
            class="custom-input"
            :value="textInput"
            @input="updateTextInput"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Question } from "../interface/questions";

export default defineComponent({
  data() {
    return {
      isActive: false,
      first: false,
      second: false,
      third: false,
      textInput: "",
    };
  },
  props: {
    question: {
      type: Object as PropType<Question>,
      required: true,
    },
    myAnswer: {
      type: Array,
      required: true,
    },
  },
  emits: [
    "answer-selected",
    "answer-where",
    "another-where",
    "my-answer-change",
    "next-quest",
    "active-next",
  ],
  methods: {
    selectAnswer(score: number, id: number, choice: string) {
      if (id === 7) {
        console.log(score, id);
        let position = 0;
        if (choice === "Instagram") {
          this.first = !this.first;
          position = 0;
        } else if (choice === "Facebook") {
          this.second = !this.second;
          position = 1;
        } else if (choice === "อื่นๆ (โปรดระบุ)") {
          this.third = !this.third;
          position = 2;
        }
        this.toggleClassName();
        this.$emit("answer-where", position);
      } else {
        this.$emit("active-next");
        this.$emit("answer-selected", score);
        this.$emit("my-answer-change", id - 1, score);
      }
    },
    toggleClassName() {
      if (this.question.id === 7) {
        this.isActive = true;
      }
    },
    updateTextInput(event: any) {
      this.textInput = event.target.value;
      this.$emit("another-where", event.target.value);
    },
    nextQuest() {
      this.$emit("next-quest");
    },
    selectedChoice(questID: number, score: number) {
      if (this.myAnswer[questID] === score) {
        this.$emit("active-next");
        return true;
      } else {
        return false;
      }
    },
  },
});
</script>

<style scoped>
.question-container h2 {
  color: #333;
  font-family: IBM Plex Sans Thai;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  word-break: break-word;

  /* background: white;
  width: 316px;
  height: 478px;
  top: 167px;
  left: 41px;
  border-radius: 20px; */
}
.question-container {
  background: white;
  width: 90%;
  min-height: 478px;
  top: 167px;
  left: 41px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #eee;
  padding: 10px 15px;
  margin: 5px 0;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

li:hover {
  background-color: #ddd;
}
.wrapper {
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 90%;
}
.wrapper .answer {
  height: 72.13px;
  top: 427.39px;
  left: 61px;
  border-radius: 20px;
  border: 1px;
  border: 1px solid #d9d9d9;
  background: #ffffff;
  font-family: IBM Plex Sans Thai;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 90%;
  max-width: 90%;
  word-break: break-word;
}

.wrapper .answer.active {
  background-color: #f57c4a;
}
.choice-container {
  max-width: 100%;
  width: 100%;
}
.quest-num {
  font-family: Gloria Hallelujah;
  font-size: 32px;
  font-weight: 400;
  line-height: 63px;
  letter-spacing: 0em;
  text-align: left;
  color: #c8c8c8;
}
.custom-input {
  border: none;
  border-bottom: 1px solid #000; /* Add an underline */
  outline: none; /* Remove the default focus outline */
  padding: 5px; /* Add some padding for better appearance */
  width: 95%;
}
</style>
