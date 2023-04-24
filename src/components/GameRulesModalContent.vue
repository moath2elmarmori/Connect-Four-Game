<template>
  <h1>RULES</h1>
  <h3>OBJECTIVE</h3>
  <p>
    Be the first player to connect 4 of the same colored discs in a row (either
    vertically, horizontally, or diagonally).
  </p>
  <h3>HOW TO PLAY</h3>
  <ol>
    <li>Red goes first in the first game.</li>
    <li>
      Players must alternate turns, and only one disc can be dropped in each
      turn.
    </li>
    <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
    <li>The starter of the previous game goes second on the next game.</li>
  </ol>
</template>

<style scoped>
h1 {
  text-align: center;
}
h3 {
  margin: 2rem 0;
  color: var(--less-purple-color);
}
li {
  margin-bottom: 10px;
}
</style>
