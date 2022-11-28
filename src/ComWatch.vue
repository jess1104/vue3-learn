<template>
    <div id="computed">
        <h2>計算屬性和監聽</h2>
        <fieldset>
            <legend>輸入姓名</legend>
            姓氏：<input type="text" placeholder="輸入姓氏" v-model="user.firstName"/><br>
            名字：<input type="text" placeholder="輸入名字" v-model="user.lastName"><br>
        </fieldset>
        <fieldset>
            <legend>計算屬性和監聽演示</legend>
            計算姓名：<input type="text" placeholder="顯示性名" v-model="fullName1"/><br>
            計算姓名：<input type="text" placeholder="顯示性名" v-model="fullName2"/><br>
            監聽姓名：<input type="text" placeholder="顯示性名" v-model="fullName3"/><br>
        </fieldset>
        <button @click="isShowed = !isShowed">顯示/隱藏cycle組件</button>
        <Cycle v-if="isShowed"/>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { computed, watch, watchEffect } from "@vue/runtime-core";
import Cycle from './Cycle.vue';

// user數據
const user = reactive({
    firstName:'王',
    lastName:'小明'
});

// const userRefs = toRefs(user);
// console.log(userRefs);

const isShowed = ref(true);

// 計算屬性=>返回一個ref物件
const fullName1 = computed(() => {
    return `${user.firstName}_${user.lastName}`
})
// console.log('fullName1', fullName1);

// 計算屬性get,set寫法
const fullName2 = computed({
    get(){
        return `${user.firstName}_${user.lastName}`
    },
    set(val) {
        const names = val.split('_');
        user.firstName = names[0];
        user.lastName = names[1];
    }
})

// 監聽姓名
const fullName3 = ref('');
// 監聽---監聽指定數據
watch(user,({ firstName,lastName })=> {
    fullName3.value = firstName + '_' + lastName
},{immediate:true,deep:true});

// watchEffect本身就是immediate:true
watchEffect(() => {
    console.log('watchEffect');
    // fullName3.value = user.firstName + '_' + user.lastName;
    const name = fullName3.value.split('_');
    user.firstName = name[0];
    user.lastName = name[1];
})
</script>

<style>

</style>