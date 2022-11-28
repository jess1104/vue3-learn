<template>
  <h2>Cycle組件</h2>
  <h2>msg: {{ msg }}</h2>
  <h2 :style="{color}">拿到爺爺顏色:{{ color }}</h2>
  <hr />
  <button @click="update">更新msg</button>
</template>

<script setup>
import {
  inject,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "@vue/runtime-core";
const msg = ref("abc");

const color = inject('colorGrand');

const update = () => {
  msg.value += "--";
};

onBeforeMount(() => {
  console.log("--onBeforeMount");
});

onMounted(() => {
  console.log("--onMounted");
});

onBeforeUpdate(() => {
  console.log("--onBeforeUpdate");
});

onUpdated(() => {
  console.log("--onUpdated");
});

onBeforeUnmount(() => {
  console.log("--onBeforeUnmount");
});

onUnmounted(() => {
  console.log("--onUnmounted");
});
</script>

<style>
</style>