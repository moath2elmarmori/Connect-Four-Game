<template>
  <div>
    <!-- <h1>Game Content Layout</h1> -->
    <div class="the-layout-container">
      <PlayerCard :thePlayer="'player1'" class="player"></PlayerCard>
      <GameBoard class="game-board"></GameBoard>
      <PlayerCard :thePlayer="'player2'" class="player"></PlayerCard>
    </div>
  </div>
</template>

<script>
import GameBoard from "./GameBoard.vue";
import PlayerCard from "./PlayerCard.vue";

export default {
  components: { PlayerCard, GameBoard },
};
</script>

<style scoped>
.the-layout-container {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  place-items: center;
  margin-top: 4rem;
}
.the-layout-container .game-board {
  width: 37rem;
}
@media (max-width: 1100px) {
  .the-layout-container {
    grid-template-columns: 1fr 1fr;
    margin-top: 1rem;
  }
  .the-layout-container .game-board {
    order: 3;
    grid-column: span 2;
    width: 32rem;
  }
  .the-layout-container .player {
    width: 80%;
  }
}
@media (max-width: 550px) {
  .the-layout-container {
    row-gap: 3rem;
  }
  .the-layout-container .game-board {
    width: 75%;
  }
}
</style>
