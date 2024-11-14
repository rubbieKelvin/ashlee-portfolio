<script setup lang="ts">
import appConfig from "~/app.config";

useHead({ title: "About me" });
</script>

<template>
  <div class="flex gap-6 flex-col">
    <div class="flex gap-12 items-center">
      <p class="text-4xl italic text-gray-800">About me</p>
      <div class="flex-grow h-px bg-gray-200" />
    </div>

    <div class="flex gap-12 flex-col-reverse md:flex-row">
      <div class="flex-[40%] flex flex-col gap-6">
        <p
          v-for="(text, index) in appConfig.aboutText.message"
          :key="index"
          class="about-text"
        >
          {{ text }}
        </p>
      </div>
      <div class="">
        <img src="/images/IMG_2058.jpg" class="md:h-[50rem] object-contain" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-text {
  font-size: larger;
  line-height: 2rem;
}

@screen md {
  .about-text {
    line-height: 2.6rem;
  }
}
</style>
