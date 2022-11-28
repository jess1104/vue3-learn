<template>
  <div>
    <h1>Vue3 learning</h1>
    <ModalButton />
    <div class="box">
      <div class="vue2">
        <h3>vue2</h3>
        <h3>{{ count }}</h3>
        <h3>人員資料:{{ person }}</h3>
        <button @click="updateCount">加一</button>
        <button @click="updatePerson">更新人員資料</button>
      </div>
      <div class="vue3">
        <h3>vue3</h3>
        <!-- 模板不用vue3Count.value -->
        <h3>{{ vue3Count }}</h3>
        <button @click="vue3UpdateCount">加一</button>
      </div>
    </div>
    <h3>user名字:{{ user.name }}</h3>
    <h3>年齡:{{ user.age }}</h3>
    <h3>性別:{{ user.gender }}</h3>
    <h3>車子:{{ user.car }}</h3>
    <button @click="updateUser">更新user</button>
    <h1 :style="{color}">爺層當前顏色：{{color}}</h1>
    <button @click="color = 'red'">紅色</button>
    <button @click="color = 'blue'">藍色</button>
    <button @click="color = 'green'">綠色</button>
    <!-- 計算屬性與監聽 -->
    <Com/>
  </div>
</template>

<script>
import { ref, reactive, provide } from "vue";
import Com from './ComWatch.vue';
import ModalButton from './ModalButton.vue';
export default {
name: "App",
  components:{
    Com,
    ModalButton,
  },
  // vue2 寫法
  data() {
    console.log("我來了vue2", this);
    return {
      count: 0,
      person: {name:'jess',age:20}
    };
  },
  methods: {
    updateCount() {
      this.count++;
    },
    updatePerson() {
      this.person ={}
    }
  },
  // 組合式api要使用的涵式setup：只在初始畫執行一次
  setup() {
    console.log("我來了vue3",this);
    // 變數
    // const vue3Count = 0; // 此數據並不是響應式數據的（響應式數據：數據變化，頁面會跟著變化）
    const vue3Count = ref(0); // 1.ref用來定義一個基本類型響應式數據
    // console.log(vue3Count); // 2.是一個物件

    // provide/inject顏色範例
    const color = ref('red');
    provide('colorGrand', color);


    // 返回一個proxy代理物件，被代理者就是reactive中傳入的物件
    // user 是代理物件， reactive裡是目標物件
    const user = reactive({
      name: "jess",
      age: 20,
      car: {
        name: "BMW M2",
        accessories: ["weels", "handler", "BOSE"],
      },
    });
    // console.log('user', user);// proxy

    function vue3UpdateCount() {
      console.log("觸發vue3UpdateCount");
      vue3Count.value++; // 3.需要去動作這個物件的value才能響應
    }

    function updateUser() {
      user.name += "=";
      user.age += 5;
      user.car.name += "=";
      user.gender = "男";
    }

    
    // 返回一個object
    return {
      vue3Count,
      user,
      color,
      vue3UpdateCount,
      updateUser,
    };
  },
}
</script>

<style scoped>
.box {
  display: flex;
}
.vue2,
.vue3 {
  width: 300px;
  height: 300px;
  margin: 20px;
  border: 1px solid black;
}
</style>>