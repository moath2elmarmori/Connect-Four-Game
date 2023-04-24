<template>
  <div class="the-board-container">
    <img src="../assets/the-board.svg" alt="" />
    <div class="the-board" ref="theBoardRef" :key="theBoardKey">
      <div
        :class="' column ' + playerTurnClassFormatted"
        v-for="(column, index) in formattedGameBoard"
        :key="index"
        :id="index"
        @click="columnClickHandler(index)"
        data-top="5"
        data-allowed="true"
      >
        <div class="cell" v-for="cell in column" :key="cell" :id="cell"></div>
      </div>
    </div>

    <PlayerTurnBox :thePlayer="playerTurn"></PlayerTurnBox>
  </div>
</template>

<script>
import PlayerTurnBox from "./PlayerTurnBox.vue";

export default {
  components: { PlayerTurnBox },
  data() {
    return {
      formattedGameBoard: this.$store.state.formattedGameBoard,
    };
  },
  computed: {
    playerTurnClassFormatted() {
      return this.playerTurn === "player1" ? "red-player" : "yellow-player";
    },
    playerTurn() {
      return this.$store.state.playerTurn;
    },
    winningPlaces() {
      return this.$store.state.winningStatusObject.winningPlaces;
    },
    theWinner() {
      return this.$store.state.winningStatusObject.winner;
    },
    isGameOver() {
      return this.$store.state.isGameOver;
    },
    theBoardKey() {
      return this.$store.state.playAgain;
    },
  },
  watch: {
    theWinner(currentState, prevState) {
      // select all the winning places and change the background to white;
      const winningPlacesArray = this.winningPlaces;
      winningPlacesArray.forEach((place) => {
        const cell = document.querySelector(`.cell[id='${place}']`);
        cell.classList.add("bg-white");
      });
    },
    isGameOver(currentState) {
      if (currentState) {
        this.makeAllColumnCusrorNotAllowed();
      }
    },
  },
  methods: {
    columnClickHandler(columnId) {
      // select the clicked column by its id and the active class to it to animate the circle
      const columnClicked = document.querySelector(`.column[id='${columnId}']`);
      const prevDataTop = +columnClicked.getAttribute("data-top");
      // check if the column is not allowed
      if (
        columnClicked.classList.contains("not-allowed") ||
        columnClicked.classList.contains("active") ||
        prevDataTop < 0 ||
        this.isGameOver
      ) {
        // if (prevDataTop < 0) {
        //   columnClicked.classList.add("not-allowed");
        // }
        return;
      }
      columnClicked.classList.add("active");
      // select the data-top attribute, and if not equal to 0 then subtract 1 from it after animating

      const selectedCell = document.querySelector(
        `.cell[id='${prevDataTop}-${columnId}']`
      );

      setTimeout(() => {
        columnClicked.classList.remove("active");
        columnClicked.setAttribute("data-top", prevDataTop - 1);
        if (prevDataTop == 0) {
          columnClicked.classList.add("not-allowed");
          columnClicked.setAttribute("data-allowed", false);
          // return;
        }
        if (this.playerTurn === "player1") {
          selectedCell.classList.add("bg-red");
        } else {
          selectedCell.classList.add("bg-yellow");
        }
        this.$store.dispatch("columnClicked", {
          row: prevDataTop,
          column: columnId,
        });
      }, 300);
    },
    makeAllColumnCusrorNotAllowed() {
      const allColumns = this.$refs.theBoardRef.querySelectorAll(".column");
      allColumns.forEach((column) => {
        column.style.cursor = "not-allowed";
      });
      this.$refs.theBoardRef.classList.add("game-over");
    },
  },
};
</script>

<style scoped>
.the-board-container {
  margin: 3rem 0;
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
  padding: 5px 2px;
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
  cursor: pointer;

  transition: 0.3s;
}
.the-board-container .the-board .column.not-allowed,
.the-board-container .the-board .column[data-allowed="false"] {
  cursor: not-allowed;
}
.the-board-container .the-board .column::before {
  content: "";
  position: absolute;
  width: calc(100% - 10.5%);
  height: calc(100% / 6 - 3.5%);
  background: var(--yellowish-color);
  top: -15%;
  left: 5.5%;
  border-radius: 50%;
  transition: 0.3s;
  opacity: 0;
}
.the-board-container .the-board .column.red-player::before {
  background-color: var(--redish-color);
}
.the-board-container .the-board .column.active::before {
  animation: toggle-opacity 1s linear;
  /* opacity: 1; */
  /* top: 77%; */
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
.the-board-container .the-board .column:not(.not-allowed):hover::after {
  opacity: 1;
}
.the-board-container .the-board .column[data-allowed="false"]:hover::after {
  opacity: 0;
}
.the-board-container .the-board.game-over .column::after {
  opacity: 0 !important;
}
.the-board-container .the-board .column .cell {
  height: calc(100% / 6 - 1.5%);
  width: 100%;
  border-radius: 50%;
  position: relative;
  /* margin: 0.75%; */
}
/* classes for the column before pseude element */
/* if the cell will go to 0 row then it will be top:3%, and every next cell will add 15% from the previous one */
/* means, the second row will be top: (3% + 15% = 18%), and so on */
.column[data-top="0"].active::before {
  top: 3%;
}
.column[data-top="1"].active::before {
  top: 18%;
}
.column[data-top="2"].active::before {
  top: 33%;
}
.column[data-top="3"].active::before {
  top: 48%;
}
.column[data-top="4"].active::before {
  top: 63%;
}
.column[data-top="5"].active::before {
  top: 78%;
}

/* animation for the circle */
@keyframes toggle-opacity {
  0% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/* classes for the top column cells for adjusting them riight */
.column .cell:first-child {
  padding: 10px;
}
</style>
