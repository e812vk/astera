<script setup lang="ts">

</script>

<template>
  <div class="w-full h-130 bg-amber-400 mb-10 -z-10 bg-[url('../images/slide-bg.svg')] text-default-gray">
    <div class="w-full h-full flex flex-col items-center justify-center text-center gap-3">
      <div class="max-w-4/6 text-4xl uppercase">
        Быстрая запись на консультации и процедуры
      </div>

      <div class="w-4/5 text-2xl">
        Выберите удобный способ связи.<br>
        Наши операторы проведут первичную консультацию <br> по услугам и запишут вас к специалистам:
      </div>
      <div class="flex items-center gap-5 justify-center h-30 w-3/5">
        <NuxtLink
            class="flex items-center justify-center text-nowrap min-w-60 h-15 grow-0 text-white bg-neutral-400 rounded-xs hover:bg-neutral-500 font px-15 py-3 me-2 mb-2 uppercase transition duration-300 ease-in-out shadow-xl cursor-pointer active:shadow-none">
          <span>+7 (919) 124-30-80</span>
        </NuxtLink>
        <NuxtLink
            class="flex items-center justify-center text-nowrap min-w-60 h-15 grow-0 text-white bg-neutral-400 rounded-xs hover:bg-neutral-500 font px-15 py-3 me-2 mb-2 uppercase transition duration-300 ease-in-out shadow-xl cursor-pointer active:shadow-none">
          <span>Чат WhatsApp</span>
        </NuxtLink>
        <NuxtLink
            class="flex items-center justify-center text-nowrap min-w-60 h-15 grow-0 text-white bg-neutral-400 rounded-xs hover:bg-neutral-500 font px-15 py-3 me-2 mb-2 uppercase transition duration-300 ease-in-out shadow-xl cursor-pointer active:shadow-none">
          <span>Чат Telegram</span>
        </NuxtLink>

      </div>
      <div class="">
        Нажимая на кнопку, вы даете свое согласие с условиями <br>
        <NuxtLink class="underline cursor-pointer">политики конфиденциальности</NuxtLink>
        и
        <NuxtLink class="underline cursor-pointer">пользовательского соглашения.</NuxtLink>
      </div>
    </div>
  </div>
</template>
