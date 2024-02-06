<template>
  <div
    class="background-image-container"
    :style="{ backgroundImage: `url(${require('@/assets/BG.png')})` }"
  >
    <button class="fixed-bottom-btn" @click="beginQuest()">เริ่มเลย</button>
  </div>
</template>

<script>
export default {
  name: "BackgroundImageComponent",
  props: {
    imageUrl: {
      type: String,
      default: "",
    },
  },
  emits: ["begin-question"],
  methods: {
    beginQuest() {
      this.$emit("begin-question");
    },
  },
};
</script>

<style scoped>
.background-image-container {
  width: 100%;
  height: 100vh;
  /* Adjust based on your needs */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.fixed-bottom-btn {
  color: #000000;
  position: fixed; /* Keeps the button fixed at a specific position on the screen */
  bottom: 20px; /* Distance from the bottom of the viewport */
  left: 0;
  right: 0;
  margin: auto; /* Centers the button horizontally */
  padding: 10px 20px;
  background-color: #f7c116; /* Example background color */
  border: none;
  cursor: pointer;
  border-radius: 5px; /* Optional: adds rounded corners */
  width: 316px;
  height: 40px;
  border-radius: 20px;
  border: 1px;
  font-family: IBM Plex Sans Thai;
  font-size: 20px;
  font-weight: 500;
  line-height: 33px;
  letter-spacing: 0em;
}
</style>
