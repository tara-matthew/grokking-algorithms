/*
Create hashmap for rows, columns, squares
Loop through rows and columns
If current row value or column value is in the hashmap, return false
For squares, use row/3 and column/3 as this evaluates to the correct square
 */

// TODO use cheats/make2x2board to create the board easily

var isValidSudoku = (board) => {
    const boards = 3;
    const [ boxes, cols, rows ] = getBoards(boards);/* Time O(ROWS * COLS) | Space O(ROWS * COLS) */

    return [boxes, cols, rows];

    // return searchGrid(board, boxes, cols, rows);    /* Time O(ROWS * COLS) | Space O(ROWS * COLS) */
};

// @ts-ignore
var initBoard = (rows, cols) => new Array(rows).fill()
    .map(() => new Array(cols).fill(false));

var getBoards = (boards) => {
    const [ rows, cols ] = [ 9, 9 ];

    // @ts-ignore
    return new Array(boards).fill()
        .map(() => initBoard(rows, cols))
}
const board =
    [["5","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]]
console.log(isValidSudoku(board));
