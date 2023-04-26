<template>
  <div
    class="container make-it-border"
    :class="thePlayer === 'player1' ? 'player1' : 'player2'"
  >
    <div class="img-div">
      <!-- <img
        :src="
          thePlayer === 'player1'
            ? '/src/assets/red-smily-face.svg'
            : '/src/assets/yellow-smily-face.svg'
        "
        alt=""
      /> -->
      <img
        src="../assets/red-smily-face.svg"
        alt="red player smily face"
        v-if="thePlayer === 'player1'"
      />
      <img
        src="../assets/yellow-smily-face.svg"
        alt="yellow player smily face"
        v-if="thePlayer === 'player2'"
      />
    </div>
    <div class="content">
      <h2>{{ thePlayer === "player1" ? "Player 1" : "Player 2" }}</h2>
      <p>{{ thePlayer === "player1" ? playerOneScore : playerTwoScore }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["thePlayer"],
  computed: {
    playerOneScore() {
      return this.$store.state.playerOneScore;
    },
    playerTwoScore() {
      return this.$store.state.playerTwoScore;
    },
  },
};
</script>

<style scoped>
.container {
  background-color: white;
  color: black;
  margin: 10px 0;
  width: 10rem;
  position: relative;
  padding: 2rem 1rem;
  text-align: center;
  margin-bottom: 2rem;
}
.container .img-div {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, 75%);
}
.container p {
  font-size: 3rem;
  font-weight: bold;
}
@media (max-width: 1100px) {
  .container {
    width: 40%;
    padding: 1rem 2rem;
  }
  .container .img-div {
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .container .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .container.player2 .content {
    flex-direction: row-reverse;
  }
  .container.player2 .img-div {
    left: initial;
    right: 0%;
    transform: translate(50%, -50%);
  }
}
@media (max-width: 767px) {
  .container .img-div img {
    width: 35px;
  }
}
@media (max-width: 650px) {
  .container .content,
  .container.player2 .content {
    flex-direction: column;
  }
}
</style>
