<template>
  <div>
    <Suspense>
      <template #default>
        <UserProfile />
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </div>
</template>

<script>
import { onErrorCaptured } from "vue";
import UserProfile from "../components/UserProfile.vue";
import Loading from "../components/loading.vue";
export default {
  name: "App",
  components: {
    UserProfile,
    Loading,
  },
  setup() {
    onErrorCaptured((error) => {
      console.log("其他的錯誤處理：", error);
    });

    return {};
  },
};
</script>

<style>

</style>