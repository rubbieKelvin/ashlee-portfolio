<script setup lang="ts">
import appConfig from "~/app.config";
useHead({ title: "Portfolio" });
</script>

<template>
  <div class="flex gap-12 flex-col items-center">
    <NuxtLink
      :to="writing.link"
      v-for="writing in appConfig.writings"
      class="flex item gap-4 md:flex-row flex-col-reverse"
      external
    >
      <div class="flex flex-col flex-[70%]">
        <h2 class="text-xl font-medium">{{ writing.title }}</h2>
        <p class="flex-grow text-gray-800">{{ writing.description }}</p>
      </div>

      <div class="flex-[30%] h-[150px] border">
        <img
          :src="writing.image"
          class="w-full h-full max-h-[150px] object-cover"
        />
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss"></style>
