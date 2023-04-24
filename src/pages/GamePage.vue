<template>
  <div>
    <!-- <h1 style="margin-bottom: 3rem">The Game</h1> -->
    <GameHeader></GameHeader>
    <GameContentLayout></GameContentLayout>
  </div>
</template>

<script>
import GameContentLayout from "../components/GameContentLayout.vue";
import GameHeader from "../components/GameHeader.vue";
export default {
  components: {
    GameHeader,
    GameContentLayout,
  },
};
</script>
