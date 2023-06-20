<template>
  <div class="box-container" ref="boxContainerRef">
    <img
      :src="
        thePlayer === 'player1'
          ? '/red-player-turn.svg'
          : '/yellow-player-turn.svg'
      "
      alt="player turn"
    />
    <!-- <img
      src="../assets/red-player-turn.svg"
      alt="player turn"
      v-if="thePlayer === 'player1'"
    />
    <img
      src="../assets/yellow-player-turn.svg"
      alt="player turn"
      v-if="thePlayer === 'player2'"
    /> -->
    <div>
      <h4 v-if="!winningText">
        Player <span>{{ playerTurn }}</span
        >'s turn
      </h4>
      <h1 v-if="!winningText">
        <span>{{ timer }}</span
        >s
      </h1>
      <h2 v-if="winningText">{{ winningText }}</h2>
      <button v-if="isGameOver" @click="nextRoundClickHandler">
        Next Round
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["thePlayer"],
  data() {
    return {
      winningText: "",
      timerToDisplay: 30,
      theTimerInterval: null,
    };
  },
  computed: {
    playerTurn() {
      const playerTurnFormattedToDisplay =
        this.$store.state.playerTurn.split("r")[1];
      return playerTurnFormattedToDisplay;
    },
    isGameOver() {
      return this.$store.state.isGameOver;
    },
    timer() {
      return this.$store.state.timerAsSeconds;
    },
    menuModalIsActive() {
      return this.$store.state.menuModalIsActive;
    },
  },
  watch: {
    isGameOver(currentState) {
      if (currentState) {
        this.$refs.boxContainerRef.classList.add("game-over", "make-it-border");
        this.winningText =
          this.$store.state.winningStatusObject.winner + " wins";
      } else {
        this.$refs.boxContainerRef.classList.remove(
          "game-over",
          "make-it-border"
        );
        this.winningText = "";
      }
    },
  },
  methods: {
    nextRoundClickHandler() {
      this.$store.commit("playAgainMutation");
    },
  },
  mounted() {
    this.theTimerInterval = setInterval(() => {
      if (!this.menuModalIsActive) {
        this.$store.dispatch("subtractFromTimer");
        if (this.timer == 0) {
          this.$store.dispatch("timerHasExpired");
        }
      }
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.theTimerInterval);
  },
};
</script>

<style scoped>
.box-container {
  height: 165px;
  position: absolute;
  left: 50%;
  bottom: -25%;
  transform: translate(-50%, 0%);
  z-index: 500;
}
.box-container.game-over {
  background-color: white;
  color: black;
}
.box-container img {
  height: 100%;
  /* transition: 0.3s; */
}
.box-container.game-over img {
  opacity: 0;
}
.box-container div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background: blue; */
  width: 100%;
  text-align: center;
  font-size: 1rem;
}
.box-container h4 {
  margin-bottom: 5px;
  /* text-transform: capitalize; */
}
.box-container h2 {
  margin-bottom: 10px;
  text-transform: capitalize;
}
.box-container button {
  background: var(--less-purple-color);
  color: white;
  outline: none;
  border: none;
  padding: 0.5rem;
  border-radius: 10px;
  text-transform: uppercase;
  margin-top: 4px;
  font-size: 1rem;
  cursor: pointer;
}
@media (max-width: 767px) {
  .box-container {
    height: 42%;
    bottom: -35%;
    font-size: 0.8rem;
  }
}
</style>
