function initializeGameBoardArr() {
  const gameBoardArr = [];
  const rows = 6;
  const columns = 7;

  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      row.push(`${r}-${c}`);
    }
    gameBoardArr.push(row);
  }
  return gameBoardArr;
}

export default initializeGameBoardArr;
