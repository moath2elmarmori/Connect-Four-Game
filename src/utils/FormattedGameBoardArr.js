import initializeGameBoardArr from "./InitializeGameBoardArr";

function formattedGameBoardToRenderColumnsAndCellToDom() {
  const gameBoardArr = initializeGameBoardArr();
  let formattedArr = [];
  for (let i = 0; i < 7; i++) {
    let column = [];
    for (let j = 0; j < 6; j++) {
      column.push(`${j}-${i}`);
    }
    formattedArr.push(column);
  }
  return formattedArr;
}

export default formattedGameBoardToRenderColumnsAndCellToDom;
