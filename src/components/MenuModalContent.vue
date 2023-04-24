<template>
  <div class="container">
    <h1>Pause</h1>
    <button class="make-it-border" @click="continueGameClickHandler">
      Continue Game
    </button>
    <button class="make-it-border" @click="restartClickHandler">Restart</button>
    <button class="make-it-border quit-game" @click="quitGameClickHandler">
      Quit Game
    </button>
  </div>
</template>

<script>
export default {
  props: ["closeModalProp"],
  methods: {
    continueGameClickHandler() {
      this.closeModalProp();
    },
    restartClickHandler() {
      this.$store.commit("restartGame");
      this.closeModalProp();
    },
    quitGameClickHandler() {
      this.$store.commit("restartGame");
      this.closeModalProp();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.container {
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container h1 {
  color: white;
  margin-bottom: 1rem;
}
.container button {
  padding: 1rem 2rem;
  width: 100%;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}
.container button:hover {
  transform: translateY(-2px);
}
.container button.quit-game {
  background-color: var(--redish-color);
  color: white;
}
</style>
