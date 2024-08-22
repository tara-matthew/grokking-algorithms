const getBoards = (boards) => {
    const [ rows, cols ] = [ 9, 9 ];

    return new Array(boards).fill()
        .map(() => initBoard(rows, cols))
};
const isValidSudoku = (board) => {
    const boards = 3;
    const [boxes, cols, rows] = getBoards(boards);/* Time O(ROWS * COLS) | Space O(ROWS * COLS) */

    // return searchGrid(board, boxes, cols, rows);    /* Time O(ROWS * COLS) | Space O(ROWS * COLS) */
};

const initBoard = (rows, cols) => new Array(rows).fill()
    .map(() => new Array(cols).fill(false));

