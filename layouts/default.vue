<script setup lang="ts">
import {Category} from "~/classes";

const categories = await $fetch('/api/categories', {
  method: "GET",
}) as Category[];
</script>

<template>
  <div>
    <div class="w-full h-20 flex gap-10 uppercase justify-center items-center text-sm bg-[#FAF5F1] text-[#2f4956]">
      <div>
        <NuxtLink to="#"
                  class="transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[#00677e]">
          Услуги
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="#"
                  class="transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[#00677e]">
          Цены
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="#"
                  class="transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[#00677e]">
          Акции
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="#">
          <img src="~/assets/images/logo.webp"
               alt="Студия красоты 'Астера'"
               class="h-18 w-30 object-auto opacity-50"/>
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="#"
                  class="transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[#00677e]">
          Мастера
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="#"
                  class="transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[#00677e]">
          Отзывы
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="#"
                  class="transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[#00677e]">
          Контакты
        </NuxtLink>
      </div>
    </div>
    <div>
      <slot/>
    </div>
    <div class="w-full h-100 bg-[#1B2A32] text-gray-300 text-xs flex justify-center items-center">
      <div class="flex items-start justify-around w-3/4">
        <div class="flex justify-center flex-col gap-4">
          <div class="h-15 w-50">
            <NuxtLink to="#">
              <img src="~/assets/images/logo.webp"
                   alt="Студия красоты 'Астера'"
                   class="h-full w-full object-auto rounded-md"/>
            </NuxtLink>
          </div>
          <div class="flex items-center gap-2">
            <NuxtLink to="https://vk.com/astera_74" class="h-8 w-8">
              <img src="~/assets/images/vk.png"
                   alt="Студия красоты 'Астера'"
                   class="h-full w-full object-auto"/>
            </NuxtLink>
            <NuxtLink to="https://go.2gis.com/ff3i8" class="h-7 w-7">
              <img src="~/assets/images/2gis.png"
                   alt="Студия красоты 'Астера'"
                   class="h-full w-full object-auto rounded-md"/>
            </NuxtLink>
          </div>
          <div class="flex justify-center flex-col gap-1">
            <NuxtLink to="#">Договор публичной оферты</NuxtLink>
            <NuxtLink to="#">Политика конфиденциальности</NuxtLink>
            <NuxtLink to="#">Согласие на обработку персональных данных</NuxtLink>
            <NuxtLink to="#">Согласие на получение рекламных сообщений</NuxtLink>
            <NuxtLink to="#">Правила посещения сети студий красоты WO/MAN</NuxtLink>
          </div>
          <div>
            ООО "Астера"
            <br>
            Все права защищены © 2020—{{ new Date().getFullYear() }}
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-xl pb-2">Услуги</div>
          <div v-for="category in categories" :key="category.id">
            <NuxtLink to="#">{{ category.name }}</NuxtLink>
          </div>
        </div>
        <div>
          <div class="text-xl pb-2">
            Материалы
          </div>
          <div class="flex flex-col gap-1">
            <NuxtLink to="#">ESTEL Professional</NuxtLink>
            <NuxtLink to="#">MATRIX</NuxtLink>
            <NuxtLink to="#">GREYMY</NuxtLink>
            <NuxtLink to="#">COCOCHOCO</NuxtLink>
            <NuxtLink to="#">HONMA Tokyo</NuxtLink>
            <NuxtLink to="#">AQUASHINE</NuxtLink>
            <NuxtLink to="#">Juvederm</NuxtLink>
            <NuxtLink to="#">Surgiderm</NuxtLink>
          </div>
        </div>
        <div>
          <div class="text-xl pb-2">
            Популярные
          </div>
          <div class="flex flex-col gap-1">
            <NuxtLink to="#">Перманентный макияж</NuxtLink>
            <NuxtLink to="#">Маникюр</NuxtLink>
            <NuxtLink to="#">Лазерная эпиляция</NuxtLink>
            <NuxtLink to="#">Биоревитализация</NuxtLink>
            <NuxtLink to="#">Уход для волос</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center w-full bg-[#111A1E] text-default-gray p-3">
      Общество с ограниченной ответственностью «Астера»,
      <br>
      ОГРН: 1207400044268 ИНН/КПП: 7448229452/744801001,
      <br>
      Юридический адрес: 454100, Челябинская область, г Челябинск, ул Бейвеля, д. 18, п. 2
    </div>
  </div>
</template>

<style scoped>

</style>