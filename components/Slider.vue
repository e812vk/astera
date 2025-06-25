<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import {Carousel, Slide} from 'vue3-carousel'
import {type Promo} from "~/classes";

const hostUrl = useRequestURL().href;

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  height: 550,
  autoplay: 4500,
  transition: 500,
  pauseAutoplayOnHover: true,
  gap: 20,
}

const promotions = await $fetch('/api/promotions') as Promo[];

promotions.forEach(promo => {
  promo.url = promo.url.replace(hostUrl, '');
});
</script>

<template>
  <Carousel v-bind="carouselConfig" v-if="promotions.length > 0">
    <Slide v-for="promo in promotions" :key="promo.id">
      <div class="flex flex-row w-full h-full">
        <div class="w-1/2 static bg-amber-50">
          <div class="-z-10 bg-[url('../images/slide-bg.svg')] opacity-50 w-full h-full"></div>
          <div class="flex flex-col gap-8 absolute left-0 top-0 h-full pl-12 pr-12 justify-center w-1/2">
            <div class="text-5xl uppercase text-default-gray">
              {{ promo.title }}
            </div>
            <div class="text-3xl text-default-gray">
              {{ promo.desc }}
            </div>
            <div class="pt-5">
              <NuxtLink :to="promo.url"
                        class="text-white bg-neutral-400 rounded-xs hover:bg-neutral-500 focus:ring-4 font px-15 py-3 me-2 mb-2 uppercase transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-2xl cursor-pointer active:shadow-none">
                Подробнее
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <img :src="`/images/${promo.image}`" :alt="promo.title" class="w-full h-full object-cover"/>
        </div>
      </div>
    </Slide>
  </Carousel>
</template>