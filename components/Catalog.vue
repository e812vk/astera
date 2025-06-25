<script setup lang="ts">
import type {Category} from "~/classes";

const categories = await $fetch('/api/categories', {
  method: "GET",
}) as Category[];
</script>

<template>
  <div class="grid grid-cols-4 gap-5 mt-7 mb-7 pl-5 pr-5">
    <div v-for="category in categories" :key="category.id"
         class="bg-center bg-cover aspect-4/3 hover:drop-shadow-lg hover:scale-102 active:scale-100 transition duration-300 sepia-[.30]"
         :style="{backgroundImage: `url(/images/${category.image})`}">
      <div class="w-full h-full relative bg-gradient-to-b from-gray-900/65 to-gray-900/15  border-amber-400">
        <div class="relative top-0 left-0 text-white text-3xl p-6">
          {{ category.name }}
        </div>
      </div>
    </div>
  </div>
</template>