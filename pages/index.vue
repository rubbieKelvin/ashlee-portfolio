<script setup lang="ts">
// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import appConfig from "~/app.config";
import { social_links } from "~/utils/constants";

useHead({
  title: "B2B Content Writer for Hire",
});
</script>

<template>
  <div>
    <!-- hero section -->
    <div class="py-6 flex gap-4 flex-col md:flex-row">
      <!-- image -->
      <div class="flex-[35%]">
        <img src="/images/ash.png" alt="Ashlee" class="h-full object-contain" />
      </div>

      <!-- writing -->
      <div class="flex-[50%] flex flex-col gap-4 md:gap-8 py-5">
        <div class="flex items-center gap-12">
          <p class="text-2xl italic text-gray-800">Hello</p>
          <div class="flex-grow h-px bg-gray-200" />
        </div>

        <div class="flex gap-8 flex-col flex-grow">
          <h2 class="font-bold text-2xl md:text-5xl">
            {{ appConfig.heroTexts.title }}
          </h2>
          <p class="text-lg md:text-xl">
            {{ appConfig.heroTexts.message }}
          </p>
        </div>

        <div>
          <a
            :href="`mailto:${appConfig.email}`"
            class="bg-black text-white flex px-4 py-4 md:w-max min-w-44 text-lg items-center justify-center"
            >Let's work .</a
          >
        </div>
        <div class="h-px bg-gray-200 hidden md:inline" />
        <div class="items-center gap-4 hidden md:flex">
          <NuxtLink
            :to="item.link"
            v-for="item in social_links"
            :key="item.link"
            external
          >
            <SvgIcon
              type="mdi"
              :path="item.icon"
              class="w-[2.2rem] h-[2.2rem]"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
