<script lang="ts" setup>
// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import appConfig from "~/app.config";
import { quick_links, social_links } from "~/utils/constants";
</script>

<template>
  <nav
    class="flex items-center md:gap-16 gap-2 md:py-12 py-4 md:flex-row flex-col"
  >
    <h1 class="text-2xl font-medium">{{ appConfig.name }}</h1>
    <div class="flex-grow hidden md:inline" />
    <div class="flex items-center gap-8">
      <NuxtLink v-for="item in quick_links" :to="item.link" external>
        {{ item.label }}
      </NuxtLink>
    </div>
    <div class="md:flex items-center gap-8 hidden">
      <NuxtLink v-for="item in social_links" :to="item.link" external>
        <SvgIcon type="mdi" :path="item.icon" />
      </NuxtLink>
    </div>
  </nav>
</template>
