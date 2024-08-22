// Initialize the board with given dimensions and initial value
const initBoard = (rows, cols, initialValue = null) =>
    new Array(rows).fill().map(() => new Array(cols).fill(initialValue));

// Fill the board with sequential numbers starting from 1
const fillBoard = (board) => {
    let num = 1;
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            board[row][col] = num++;
        }
    }
    return board;
};

// Main function to initialize and fill the board
const fillNonSudokuBoard = (rows, cols) => {
    const board = initBoard(rows, cols); // Initialize a rows x cols board
    return fillBoard(board);             // Fill the board with numbers
};

// Example usage:
const filledBoard = fillNonSudokuBoard(4, 5);
console.log(filledBoard);
