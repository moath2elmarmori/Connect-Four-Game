<script setup></script>

<!-- <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->

<template>
  <div class="app-container">
    <!-- <h1>From App.vue</h1> -->
    <!-- <Transition>
      <RouterView></RouterView>
    </Transition> -->
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.app-container {
  padding: 2rem 10rem;
  min-height: 100vh;
}
@media (max-width: 1300px) {
  .app-container {
    padding: 2rem 3rem;
  }
}
@media (max-width: 767px) {
  .app-container {
    padding: 2rem 1rem;
  }
}

/* animation */
.route-enter-active {
  animation: animate-route 1s ease-in-out reverse;
}
.route-leave-active {
  animation: animate-route 1s ease-in-out;
}
@keyframes animate-route {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
</style>
