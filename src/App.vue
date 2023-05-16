<template>
  <WelcomeBox msg="Welcome to Globish" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WelcomeBox from "./components/WelcomeBox.vue";

export default defineComponent({
  name: "App",
  components: {
    WelcomeBox,
  },
});
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
