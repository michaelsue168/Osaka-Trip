<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HotelItem from '../components/HotelItem.vue'
import { hotels } from '../components/HotelsList'
const route = useRoute()

const currentHotel = computed(() => {
  const id = parseInt(route.params.id)
  return hotels.find((hotel) => hotel.id === id)
})
</script>
<script></script>
<template>
  <main>
    <HotelItem :img="currentHotel.img">
      <template #HotelName>{{ currentHotel.name }}</template>
      <template #tag>
        <a-tag v-for="(item, index) in currentHotel.tag" :key="index" :color="item.color">{{
          item.name
        }}</a-tag>
      </template>
      <template #info>{{ currentHotel.info }}</template>
      <template #good>
        <ul>
          <li v-for="(item, index) in currentHotel.good" :key="index">{{ item }}</li>
        </ul>
      </template>
      <template #bad>
        <ul>
          <li v-for="(item, index) in currentHotel.bad" :key="index">{{ item }}</li>
        </ul>
      </template>
      <template #map><a :href="currentHotel.link" target="_blank">點我看地圖</a></template>
    </HotelItem>
  </main>
</template>

<style scoped>
ul,
ol {
  padding-left: 0;
  /* 移除內縮 */
  list-style-position: inside;
  /* 使列表項目標號在內部 */
}

li {
  margin-left: 0;
  /* 移除左邊距 */
}
</style>
