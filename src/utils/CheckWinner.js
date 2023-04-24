import winningStatus from "./WinningStatus";

const rows = 6;
const columns = 7;

function checkWinner(gameBoardArr) {
  let result = false;
  result = checkWinnerHorizontally(gameBoardArr);
  if (!result) {
    result = checkWinnerVertically(gameBoardArr);
    if (!result) {
      result = checkWinnerAntiDiagonally(gameBoardArr);
      if (!result) {
        result = checkWinnerDiagonally(gameBoardArr);
      }
    }
  }
  return result;
}

export default checkWinner;

function checkWinnerHorizontally(gameBoardArr) {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (gameBoardArr[r][c].includes("player")) {
        if (
          gameBoardArr[r][c] == gameBoardArr[r][c + 1] &&
          gameBoardArr[r][c + 1] == gameBoardArr[r][c + 2] &&
          gameBoardArr[r][c + 2] == gameBoardArr[r][c + 3]
        ) {
          const winner = gameBoardArr[r][c];
          const winningStat = winningStatus(winner, [
            `${r}-${c}`,
            `${r}-${c + 1}`,
            `${r}-${c + 2}`,
            `${r}-${c + 3}`,
          ]);

          return winningStat;
        }
      }
    }
  }
  return false;
}

function checkWinnerVertically(gameBoardArr) {
  for (let r = 0; r < rows - 3; r++) {
    for (let c = 0; c < columns; c++) {
      if (gameBoardArr[r][c].includes("player")) {
        if (
          gameBoardArr[r][c] == gameBoardArr[r + 1][c] &&
          gameBoardArr[r + 1][c] == gameBoardArr[r + 2][c] &&
          gameBoardArr[r + 2][c] == gameBoardArr[r + 3][c]
        ) {
          const winner = gameBoardArr[r][c];
          const winningStats = winningStatus(winner, [
            `${r}-${c}`,
            `${r + 1}-${c}`,
            `${r + 2}-${c}`,
            `${r + 3}-${c}`,
          ]);
          return winningStats;
        }
      }
    }
  }
  return false;
}

function checkWinnerAntiDiagonally(gameBoardArr) {
  for (let r = 0; r < rows - 3; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (gameBoardArr[r][c].includes("player")) {
        if (
          gameBoardArr[r][c] == gameBoardArr[r + 1][c + 1] &&
          gameBoardArr[r + 1][c + 1] == gameBoardArr[r + 2][c + 2] &&
          gameBoardArr[r + 2][c + 2] == gameBoardArr[r + 3][c + 3]
        ) {
          const winner = gameBoardArr[r][c];
          const winningStats = winningStatus(winner, [
            `${r}-${c}`,
            `${r + 1}-${c + 1}`,
            `${r + 2}-${c + 2}`,
            `${r + 3}-${c + 3}`,
          ]);
          return winningStats;
        }
      }
    }
  }
  return false;
}

function checkWinnerDiagonally(gameBoardArr) {
  for (let r = 3; r < rows; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (gameBoardArr[r][c].includes("player")) {
        if (
          gameBoardArr[r][c] == gameBoardArr[r - 1][c + 1] &&
          gameBoardArr[r - 1][c + 1] == gameBoardArr[r - 2][c + 2] &&
          gameBoardArr[r - 2][c + 2] == gameBoardArr[r - 3][c + 3]
        ) {
          const winner = gameBoardArr[r][c];
          const winningStats = winningStatus(winner, [
            `${r}-${c}`,
            `${r - 1}-${c + 1}`,
            `${r - 2}-${c + 2}`,
            `${r - 3}-${c + 3}`,
          ]);
          return winningStats;
        }
      }
    }
  }
  return false;
}
