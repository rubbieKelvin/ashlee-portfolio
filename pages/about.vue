<script setup lang="ts">
import appConfig from "~/app.config";
</script>

<template>
  <div class="flex gap-6 flex-col">
    <div class="flex gap-12 items-center">
      <p class="text-4xl italic text-gray-800">About me</p>
      <div class="flex-grow h-px bg-gray-200" />
    </div>

    <div class="flex gap-12">
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
        <img src="/images/ash.png" class="h-[50rem] object-contain" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-text {
    font-size: larger;
    line-height: 3rem;
}
</style>
