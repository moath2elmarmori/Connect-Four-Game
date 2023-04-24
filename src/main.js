import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";
import "./style.css";

// componetns imports
import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import GamePage from "./pages/GamePage.vue";
import GameBoardTest from "./pages/GameBoardTest.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";
import MoathPage from "./pages/MoathPage.vue";

// utility imports
import initializeGameBoardArr from "./utils/InitializeGameBoardArr";
import formattedGameBoardToRenderColumnsAndCellToDom from "./utils/FormattedGameBoardArr";
import checkWinner from "./utils/CheckWinner";

// creating the vuex store instance
const store = createStore({
  state() {
    return {
      playerTurn: "player1",
      playerOneScore: 0,
      playerTwoScore: 0,
      playAgain: Math.random().toString(),
      theGameBoardArr: initializeGameBoardArr(),
      formattedGameBoard: formattedGameBoardToRenderColumnsAndCellToDom(),
      isGameOver: false,
      winningStatusObject: { winner: null, winningPlaces: [] },
      timerAsSeconds: 30,
      menuModalIsActive: false,
    };
  },
  mutations: {
    selectCell(state, payload) {
      // the payload is going to be {row: r, column: c}
      state.theGameBoardArr[payload.row][payload.column] = state.playerTurn;
    },
    changePlayerTurn(state) {
      if (state.playerTurn === "player1") {
        state.playerTurn = "player2";
      } else {
        state.playerTurn = "player1";
      }
      state.timerAsSeconds = 30;
    },
    checkIsGameOver(state) {
      const winningStatus = checkWinner(state.theGameBoardArr);
      if (winningStatus) {
        state.winningStatusObject.winner = winningStatus.winner;
        state.winningStatusObject.winningPlaces =
          winningStatus.winningPlacesArray;
        state.isGameOver = true;
        // add one to the score of the player that won this round
        if (winningStatus.winner === "player1") {
          state.playerOneScore += 1;
        } else {
          state.playerTwoScore += 1;
        }
      }
    },
    playAgainMutation(state) {
      state.playAgain = Math.random().toString();
      state.isGameOver = false;
      state.winningStatusObject = { winner: null, winningPlaces: [] };
      state.theGameBoardArr = initializeGameBoardArr();
      state.timerAsSeconds = 30;
    },
    restartGame(state) {
      state.playerTurn = "player1";
      state.playerOneScore = 0;
      state.playerTwoScore = 0;
      state.playAgain = Math.random().toString();
      state.theGameBoardArr = initializeGameBoardArr();
      state.formattedGameBoard =
        formattedGameBoardToRenderColumnsAndCellToDom();
      state.isGameOver = false;
      state.winningStatusObject = { winner: null, winningPlaces: [] };
      state.timerAsSeconds = 30;
    },
    resetTimer(state) {
      state.timerAsSeconds = 30;
    },
    toggleIsMenuModalActive(state) {
      state.menuModalIsActive = !state.menuModalIsActive;
    },
  },
  actions: {
    columnClicked(context, payload) {
      context.commit("selectCell", payload);
      context.commit("checkIsGameOver");
      context.commit("changePlayerTurn");
    },
    timerHasExpired(context, payload) {
      context.commit("resetTimer");
      context.commit("changePlayerTurn");
    },
    subtractFromTimer(context) {
      context.state.timerAsSeconds -= 1;
    },
  },
});

// creating the vue router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    // {
    //   path: "/moath",
    //   component: MoathPage,
    // },
    { path: "/game", component: GamePage },
    // { path: "/gameTest", component: GameBoardTest },
    { path: "/:notFoundParam(.*)", component: NotFoundPage },
  ],
});

const vueApp = createApp(App);
vueApp.use(router);
vueApp.use(store);

vueApp.mount("#app");
