<template>
  <div>
    <h1>game board test</h1>
    <div class="the-board-container">
      <img src="../assets/the-board.svg" alt="" />
      <div class="the-board">
        <div class="column">
          <div class="cell"></div>
          <div class="cell bg-yellow"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell bg-red"></div>
        </div>
        <div class="column">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell bg-yellow"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell bg-yellow"></div>
        </div>
        <div class="column">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
        <div class="column">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
        <div class="column">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
        <div class="column">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
        <div class="column">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const gameBoardArr = [];
    const rows = 6;
    const columns = 7;
    function createGameBoard() {
      for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
          row.push(`${r}-${c}`);
        }
        gameBoardArr.push(row);
      }
      return gameBoardArr;
    }
    return {
      theGameBoard: createGameBoard(),
    };
  },
};
</script>

<style scoped>
.the-board-container {
  margin: 3rem 30rem;
  position: relative;
}
.the-board-container img {
  width: 100%;
  position: relative;
  z-index: 100;
  pointer-events: none;
}
.the-board-container .the-board {
  /* background: #545454; */
  width: 100%;
  min-height: 100px;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  /* opacity: 0.3; */
  display: flex;
  justify-content: center;
}
.the-board-container .the-board .column {
  /* background: blue; */
  height: 100%;
  /* flex-grow: 1; */
  text-align: center;
  width: calc(100% / 7 - 0.3%);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: 0.3s;
}
.the-board-container .the-board .column:first-of-type::before {
  content: "";
  position: absolute;
  width: calc(100% - 1.5%);
  height: calc(100% / 6 - 1.5%);
  background: var(--yellowish-color);
  top: -15%;
  border-radius: 50%;
  transition: 0.5s;
}
.the-board-container .the-board .column.red-player:first-of-type::before {
  background-color: var(--redish-color);
}
.the-board-container .the-board .column::after {
  content: "";
  position: absolute;
  /* background-color: yellow; */
  border: 1rem solid transparent;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  border-top-color: var(--yellowish-color);
  opacity: 0;
}
.the-board-container .the-board .column.red-player::after {
  border-top-color: var(--redish-color);
}
.the-board-container .the-board .column:hover::after {
  opacity: 1;
}
.the-board-container .the-board .column .cell {
  height: calc(100% / 6 - 1.5%);
  /* background: red; */
  /* flex-grow: 1; */
  width: 100%;
  position: relative;
  cursor: pointer;
}
@media (max-width: 1650px) {
  .the-board-container {
    margin: 3rem 25rem;
  }
}
@media (max-width: 1300px) {
  .the-board-container {
    margin: 3rem 15rem;
  }
}
@media (max-width: 991px) {
  .the-board-container {
    margin: 3rem 7rem;
  }
}
</style>
