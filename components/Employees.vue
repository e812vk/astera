<script setup lang="ts">
import type {Employee} from "~/classes";

const employees = await $fetch('/api/employees', {
  method: "GET",
}) as Employee[];
</script>

<template>
  <div v-if="employees.length > 0" class="flex items-center justify-center flex-wrap w-full mb-10 text-default-gray">
    <div class="max-w-4/6 text-4xl uppercase mb-10">
      Наши мастера
    </div>
    <div class="flex items-center justify-center flex-wrap w-full h-full mb-10 gap-y-10">

      <div v-for="employee in employees"
           :key="employee.id"
           class="w-70 m-2 h-110 shadow-xl flex items-center justify-center flex-col hover:scale-102 active:shadow-none active:scale-100 transition duration-300 cursor-pointer">
        <div :style="{backgroundImage: `url(/images/${employee.image})`}"
             class="h-280 w-full bg-cover bg-center"/>
        <div class="flex items-center justify-center flex-col h-full">
          <div class="text-2xl mb-2">{{ employee.name }} {{ employee.surname }}</div>
          <div class="text-center">{{ employee.position }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
