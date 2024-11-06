<script lang="ts" setup>
import { RouterLink } from "vue-router";
// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import { quick_links, social_links } from "@/contacts";
</script>

<template>
  <nav
    class="flex items-center md:gap-16 gap-2 md:py-12 py-4 md:flex-row flex-col"
  >
    <h1 class="text-2xl font-medium">Ashlee Oghogho</h1>
    <div class="flex-grow hidden md:inline" />
    <div class="flex items-center gap-8">
      <RouterLink v-for="item in quick_links" :to="item.link">
        {{ item.label }}
      </RouterLink>
    </div>
    <div class="md:flex items-center gap-8 hidden">
      <a v-for="item in social_links" :href="item.link">
        <SvgIcon type="mdi" :path="item.icon" />
      </a>
    </div>
  </nav>
</template>
