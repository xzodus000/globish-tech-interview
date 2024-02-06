<template>
  <!-- <h2>Your Personality Type: {{ result }}</h2>
    <p>{{ description }}</p> -->
  <div class="question-container">
    <div class="wrapper">
      <div class="title">ผลลัพธ์ของคุณคือ</div>
      <div v-if="result === 'The Gradual Learner'" class="banner">
        <img
          :src="require('@/assets/learner.png')"
          alt="Vue.js Logo"
          style="width: 100%"
        />
      </div>
      <div v-if="result === 'The Enthusiastic'" class="banner">
        <img
          :src="require('@/assets/Enthus.png')"
          alt="Vue.js Logo"
          style="width: 100%"
        />
      </div>
      <div v-if="result === 'The Hobbyist'" class="banner">
        <img
          :src="require('@/assets/Hobby.png')"
          alt="Vue.js Logo"
          style="width: 100%"
        />
      </div>
      <div class="where">
        <div class="desc">คุณรู้จัก Globish ผ่าน</div>
        <div class="desc">{{ whereTitle }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    score: {
      type: Number,
      required: true,
    },
    where: {
      type: Array,
      required: true,
    },
    another: {
      type: String,
      required: true,
    },
    myAnswer: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const result = computed(() => {
      const sum = props.myAnswer.reduce(
        (accumulator: number, currentValue: any) => accumulator + currentValue,
        0
      );
      console.log("🚀 ~ result ~ sum:", sum);
      if (sum >= 131) {
        return "The Gradual Learner";
      } else if (sum >= 91) {
        return "The Enthusiastic";
      } else {
        return "The Hobbyist";
      }
    });

    const description = computed(() => {
      switch (result.value) {
        case "The Gradual Learner":
          return "You take your time to learn new things, preferring to gain deep understanding.";
        case "The Enthusiastic":
          return "You dive into new experiences with zest and eagerness, always looking for the next adventure.";
        case "The Hobbyist":
          return "You enjoy doing things just for the fun of it, without worrying too much about the end result.";
        default:
          return "Your personality is unique and does not fit into a single category.";
      }
    });
    const whereTitle = computed(() => {
      let myWhere = [];
      for (let index = 0; index < props.where.length; index++) {
        const element = props.where[index];
        if (index === 0 && element) {
          myWhere.push("Instagram");
        } else if (index === 1 && element) {
          myWhere.push("Facebook");
        } else if (index === 2 && element && props.another) {
          myWhere.push(props.another);
        }
      }
      console.log("🚀 ~ whereTitle ~ myWhere:", myWhere, props.another);
      return myWhere.toString();
    });

    return { result, description, whereTitle };
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
  margin: 0 auto;

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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
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
  width: 250px;
}

.wrapper .answer.active {
  background-color: #f57c4a;
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
.title {
  font-family: IBM Plex Sans Thai;
  font-size: 26px;
  font-weight: 700;
  line-height: 59px;
  letter-spacing: 0em;
  text-align: center;
  color: #333333;
}
.where {
  margin-top: 10%;
  margin-bottom: 10%;
}
.where .desc {
  font-family: IBM Plex Sans Thai;
  font-size: 20px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: center;
}
</style>
