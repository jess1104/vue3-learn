<template>
  <button @click="modalOpen = true">
    打開modal(With teleport!)
  </button>

  <!-- <div v-if="modalOpen" class="modal">
    <div>
      I'm a teleported modal! (My parent is "body")
      <button @click="modalOpen = false">Close</button>
    </div>
  </div> -->

  <Teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div>
        I'm a teleported modal! (My parent is "body")
        <button @click="modalOpen = false">Close</button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const modalOpen = ref(false);

</script>

<style scope>
.modal {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>