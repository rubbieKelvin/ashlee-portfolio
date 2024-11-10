<script setup lang="ts">
// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import NavigationBar from "~/components/NavigationBar.vue";
import { social_links } from "~/utils/constants";
</script>

<template>
  <div class="h-full px-5 md:px-0">
    <!-- hero 'n stuff -->
    <div class="container mx-auto md:h-[70vh]">
      <!-- navigation section -->
      <NavigationBar />

      <!-- hero section -->
      <div class="py-6 flex gap-4 flex-col md:flex-row">
        <!-- image -->
        <div class="h-[50rem] flex-[35%]">
          <img
            src="/images/ash.png"
            alt="Ashlee"
            class="h-full object-contain"
          />
        </div>
        <!-- writing -->
        <div class="flex-[50%] flex flex-col gap-4 md:gap-8 py-5">
          <div class="flex items-center gap-12">
            <p class="text-lg text-gray-600">Hello</p>
            <div class="flex-grow h-px bg-gray-200" />
          </div>

          <div class="flex gap-8 flex-col flex-grow">
            <h2 class="font-bold text-2xl md:text-6xl">
              Professional Freelance Writer for Engaging Brand Content
            </h2>
            <p class="text-lg md:text-xl">
              I write and refresh journalistic-style content for brands like
              Shopify, Zapier, Descript, Shogun, CoSchedule, and more. My
              specialties: Ecommerce, marketing, and the creator economy—with
              lived experience in all three.
            </p>
          </div>

          <div>
            <p class="text-gray-600 text-sm mb-2">need a sugar baby?</p>
            <a
              href="tel:+2347086889864"
              class="bg-black text-white flex w-44 h-20 items-center justify-center"
              >Call me.</a
            >
          </div>
          <div class="h-px bg-gray-200" />
          <div class="flex items-center gap-4">
            <NuxtLink
              :to="item.link"
              v-for="item in social_links"
              :key="item.link"
              external
            >
              <SvgIcon
                type="mdi"
                :path="item.icon"
                class="w-[3.5rem] h-[3.5rem]"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="h-[50em]"></div>
</template>
