<template>
  <div class="flex items-center justify-center w-full">
    <div class="flex flex-col items-center justify-center mb-10 h-130 text-default-gray lg:w-2/3 md:w-full">
      <div class="flex items-center justify-center h-15 text-center text-4xl uppercase mb-4">
        Контакты
      </div>
      <div class="flex items-center justify-center h-full w-full">
        <div class="w-1/2 h-full">
          <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A501d590b99e385a716e5c210c553fc8ca292456e32e81fe2eec80205e163b0b6&amp;source=constructor"
              class="w-full h-full">
          </iframe>
        </div>
        <div class="w-1/2 pl-10">
          <div class="text-2xl">
            Адрес:
          </div>
          <div>
            г. Челябинск, ул. Бейвеля, д. 18
          </div>
          <div class="text-2xl pt-2">
            График работы:
          </div>
          <div>
            Ежедневно с 9:00 до 21:00
          </div>
          <div class="text-2xl pt-2">
            Контакты:
          </div>
          <div>
            <NuxtLink to="tel:+79191243008">+7 (919) 124-30-08</NuxtLink>
            <br>
            <NuxtLink to="tel:+73517008070">+7 (351) 700-80-70</NuxtLink>
            <br>
            <NuxtLink href="mailto:astera_2020@mail.ru">astera_2020@mail.ru</NuxtLink>
          </div>
          <div class="text-2xl pt-2 pb-2">
            Социальные сети:
          </div>
          <div class="flex">
            <NuxtLink href="https://vk.com/astera_74" class="w-10 h-10 bg-[url(../images/vk.png)] bg-cover"/>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>