<script setup lang="ts">
import appConfig from "~/app.config";
import NavigationBar from "~/components/NavigationBar.vue";
// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import { social_links } from "~/utils/constants";
</script>

<template>
  <NavigationBar class="sticky top-0 bg-white container" />

  <div class="container px-4 md:px-0 min-h-[75vh]">
    <slot />
  </div>

  <footer
    class="flex-grow items-center flex py-8 mt-2 px-4 md:px-0 container border-t"
  >
    <div class="flex justify-between flex-col md:flex-row">
      <div>
        <p class="text-gray-800 text-xl font-bold">
          {{ appConfig.name }}
        </p>
        <p>B2B Content Writer for Hire</p>
        <p class="mt-3">Let's connect on social media</p>
        <div class="flex gap-2 md:mt-0 mt-2">
          <NuxtLink
            :to="item.link"
            v-for="item in social_links"
            :key="item.link"
            external
          >
            <SvgIcon
              type="mdi"
              :path="item.icon"
              class="md:w-[1.5rem] md:h-[1.5rem] w-8 h-8"
            />
          </NuxtLink>
        </div>
      </div>

      <div class="md:w-[40%] mt-6 md:mt-0">
        <p class="text-gray-700">
          My site uses cookies to collect information about site visitors. This
          information does not identify you in any way. By continuing to use the
          site, you’re agreeing that that’s okay.
        </p>

        <p class="mt-4">
          Copyright &copy; {{ appConfig.name }} | All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
