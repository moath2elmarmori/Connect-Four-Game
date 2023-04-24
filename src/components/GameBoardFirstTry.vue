<template>
  <div>
    <h1>Game Board</h1>
    <div class="board-container">
      <div class="board">
        <div class="column">
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
        </div>
        <div class="column">
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
        </div>
        <div class="column">
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
        </div>
        <div class="column">
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
        </div>
        <div class="column">
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
        </div>
        <div class="column">
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
        </div>
        <div class="column">
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
          <div class="cell-container">
            <div class="cell"></div>
          </div>
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
.board-container {
  margin: 3rem 15rem;
}
.board-container .board {
  background-color: white;
  min-height: 700px;
  display: flex;
  gap: 10px;
  padding: 10px 10px 50px;
}
.board-container .board .column {
  --size-of-cell: 85px;
  /* background-color: red; */
  width: calc(100% / 6);
  display: flex;
  flex-direction: column;
  position: relative;
}
/* .board-container .board .column::before {
  content: "";
  position: absolute;
} */
/* .board-container .board .column:first-of-type::before {
  width: calc(var(--size-of-cell) - 10px);
  height: calc(var(--size-of-cell) - 10px);
  background-color: red;
  border: 5px solid black;
  border-top: 10px solid black;
  border-radius: 50%;
} */
.board-container .board .column .cell-container {
  /* background: blue; */
  width: 100%;
  height: calc(100% / 6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.board-container .board .column .cell-container .cell {
  width: var(--size-of-cell);
  height: var(--size-of-cell);
  border-radius: 50%;
  background: var(--purple-color);
  border: 5px solid black;
  border-top: 10px solid black;
  position: relative;
}
.board-container
  .board
  .column:first-child
  .cell-container:first-of-type
  .cell::before {
  content: "";
  position: absolute;
}
@media (max-width: 1280px) {
  .board-container {
    margin: 3rem 5rem;
  }
}
@media (max-width: 991px) {
  html {
    --size-of-cell: 60px;
  }
  .board-container .board .column,
  .board-container .board .column::before {
    --size-of-cell: 60px;
  }
}
@media (max-width: 767px) {
  .board-container .board {
    min-height: 500px;
  }
  .html {
    --size-of-cell: 40px;
  }
  .board-container .board .column,
  .board-container .board .column::before {
    --size-of-cell: 40px;
  }
}
@media (max-width: 600px) {
  .board-container {
    margin: 3rem 0;
  }
  .board-container .board {
    min-height: 400px;
  }
  .board-container .board .column,
  .board-container .board .column::before {
    --size-of-cell: 35px;
  }
}
</style>
