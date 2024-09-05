class Solution {
    isValidSudoku(board) {
        const rowLength = 9;
        const colLength = 9;
        const cols = new Map();
        const rows = new Map();
        const squares = new Map();

        for (let row = 0; row < rowLength; row++) {
            for (let col = 0; col < colLength; col++) {
                let cell = board[row][col];
                if (cell === '.') {
                    continue;
                }

                let index = [Math.floor(row / 3), Math.floor(col / 3)].toString();

                if (cols.get(col)?.has(cell) || rows.get(row)?.has(cell) || squares.get(index)?.has(cell)) {
                    return false;
                }

                cols.set(col, new Set(cols.get(col)).add(cell));
                rows.set(row, new Set(rows.get(row)).add(cell));
                squares.set(index, new Set(squares.get(index)).add(cell));

            }
        }

        return true;
    }
}

const board =
    [["1","2",".",".","3",".",".",".","."],
        ["4",".",".","5",".",".",".",".","."],
        [".","9","1",".",".",".",".",".","3"],
        ["5",".",".",".","6",".",".",".","4"],
        [".",".",".","8",".","3",".",".","5"],
        ["7",".",".",".","2",".",".",".","6"],
        [".",".",".",".",".",".","2",".","."],
        [".",".",".","4","1","9",".",".","8"],
        [".",".",".",".","8",".",".","7","9"]]

console.log(new Solution().isValidSudoku(board));
