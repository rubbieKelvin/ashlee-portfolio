<script setup lang="ts">
// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiDumbbell, mdiHospital } from "@mdi/js";

useHead({ title: "Services" });
</script>

<template>
  <div class="flex items-center mt-4 flex-col gap-8">
    <h1 class="text-4xl font-bold">What do you get when you hire me?</h1>

    <p class="md:text-center text-lg">
      <span class="font-medium">Let’s crush your content marketing goals</span>.
      I provide painstakingly <br />
      well-written content to help you get results from content marketing.
    </p>

    <div class="h-px w-[80%] bg-gray-200" />

    <h2 class="text-2xl font-medium">Writing</h2>

    <div class="flex gap-4 w-full flex-col md:flex-row">
      <ul class="flex-[50%] flex flex-col gap-2">
        <li class="">
          <span class="text-2xl font-bold text-gray-600">*&nbsp;</span>Seo
          optimised content
        </li>
        <li class="">
          <span class="text-2xl font-bold text-gray-600">*&nbsp;</span>Google
          doc with standard formatting
        </li>
        <li class="">
          <span class="text-2xl font-bold text-gray-600">*&nbsp;</span>Content
          that your audience can resonate with
        </li>
      </ul>

      <ul class="flex-[50%] flex flex-col gap-2">
        <li class="">
          <span class="text-2xl font-bold text-gray-600">*&nbsp;</span>Attension
          to detail
        </li>
        <li class="">
          <span class="text-2xl font-bold text-gray-600">*&nbsp;</span>Ability
          to meet deadlines and manage time effectively
        </li>
        <li class="">
          <span class="text-2xl font-bold text-gray-600">*&nbsp;</span>Good team
          player
        </li>
      </ul>
    </div>

    <h2 class="text-2xl font-medium mt-8">Industries I cover</h2>
    <p class="text-lg">
      I write blog posts and short form content in the following industies
    </p>

    <div class="flex gap-4 md:w-[80%] md:flex-row flex-col w-full">
      <div
        class="flex-[50%] border hover:bg-gray-100 p-4 flex gap-4 items-center"
      >
        <SvgIcon
          type="mdi"
          :path="mdiHospital"
          class="w-[2.2rem] h-[2.2rem] text-blue-600"
        />
        <span>Health and wellness</span>
      </div>
      <div
        class="flex-[50%] border hover:bg-gray-100 p-4 flex gap-4 items-center"
      >
        <SvgIcon
          type="mdi"
          :path="mdiDumbbell"
          class="w-[2rem] h-[2rem] text-blue-600"
        />
        <span>Fitness</span>
      </div>
    </div>

    <p class="text-lg md:text-center">
      Though i write primarily in these niches, my versatility enables me to<br />
      create content across a wide range of industries
    </p>

    <h1 class="text-4xl font-bold mt-8">Why should you hire me?</h1>
    <h2 class="text-2xl font-medium">Excellent writing skills</h2>

    <p>
      I provide valuable, orignal and well-written content. Before creating any
      content, i make sure to have a thorough understanding and sound knowledge
      about the subject matter which in this case is your business, the services
      or products you offer, how that service or product benefit your customer
      and exactly how to put together all these useful information into a well
      written piece of content.<br />
    </p>

    <p>
      Another thing that stands out about my writing is my unique tone of voice,
      I don't believe in creating generic, tone-deaf content. How do I connect
      with readers if I sound like a robot? I believe in adjusting my tone of
      voice whether it be straightforward educational and informative content or
      inserting cheerful quips here and there to get a chuckle (or two) out of
      my readers. I provide content that is the right fit for your business.
      <br />
    </p>

    <h2 class="text-2xl mt-4 font-medium">Industry expertise</h2>
    <p>
      When I'm asked why I decided to write about health, wellness, food, and
      fitness, my answer is always simple, I love it. Routines like hitting the
      gym, and eating healthy are a part of my day-to-day life so wetting about
      these niches does not seem like a chore or work to me, I'm simply writing
      about the lifestyle I love. My degree in Radiography also affords me with
      knowledge in the health sector.
      <br />
    </p>

    <h2 class="text-2xl mt-4 font-medium">Easy to work with</h2>

    <p>
      I pride myself on being friendly and easy to work with while maintaining
      professionalism
    </p>
  </div>
</template>
