function generateSpiralMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix[i] = [];
    }
  
    let counter = 1;
    let startRow = 0;
    let endRow = rows - 1;
    let startCol = 0;
    let endCol = cols - 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      for (let i = startCol; i <= endCol; i++) {
        matrix[startRow][i] = counter;
        counter++;
      }
      startRow++;
  
      for (let i = startRow; i <= endRow; i++) {
        matrix[i][endCol] = counter;
        counter++;
      }
      endCol--;
  
      if (startRow <= endRow) {
        for (let i = endCol; i >= startCol; i--) {
          matrix[endRow][i] = counter;
          counter++;
        }
        endRow--;
      }
  
      if (startCol <= endCol) {
        for (let i = endRow; i >= startRow; i--) {
          matrix[i][startCol] = counter;
          counter++;
        }
        startCol++;
      }
    }
  
    for (let i = 0; i < rows; i++) {
      console.log(matrix[i].join(" "));
    }
  }

generateSpiralMatrix(5, 5);