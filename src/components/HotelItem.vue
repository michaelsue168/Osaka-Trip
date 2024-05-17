<template>
  <a-carousel arrows>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <LeftCircleOutlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <RightCircleOutlined />
      </div>
    </template>
    <div v-for="item in img" :key="item.id" class="carousel-item">
      <img alt="hotel img" class="image" :src="item.src" />
    </div>
  </a-carousel>
  <h1>
    <slot name="HotelName"></slot>
  </h1>
  <slot name="info"></slot>
  <p>
    <slot name="tag"></slot>
  </p>
  <div class="item">
    <i>
      <IconGood />
    </i>
    <div class="details">
      <h3>優點</h3>
      <slot name="good"></slot>
    </div>
  </div>
  <div class="item">
    <i>
      <IconBad />
    </i>
    <div class="details">
      <h3>缺點</h3>
      <slot name="bad"></slot>
    </div>
  </div>
  <div class="item">
    <i>
      <IconMap />
    </i>
    <div class="details">
      <h3>Google 地圖</h3>
      <slot name="map"></slot>
    </div>
  </div>
</template>

<script setup>
import IconGood from './icons/IconGood.vue'
import IconBad from './icons/IconBad.vue'
import IconMap from './icons/IconMap.vue'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue'

defineProps({
  img: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.carousel-item {
  display: flex !important;
  justify-content: center !important;
  /* 水平居中 */
  align-items: center !important;
  /* 垂直居中 */
  height: 350px;
  /* 根据你的需求调整高度 */
  width: 100% !important;
  /* 确保项的宽度是 100% */
}

.image {
  max-width: 100%;
  max-height: 100%;
}

.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h1 {
  color: var(--color-heading);
}

h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  /* background-color: rgba(31, 45, 61, 0.11); */
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}

:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}

:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>
