function searchMatrix(matrix: number[][], target: number): boolean {
    let x = 0;
    let y = matrix[0].length-1;
    while(x >= 0 && y >= 0 && x < matrix.length && y < matrix[0].length) {
        let compare = matrix[x][y];
        if (target === compare) {
            return true;
        } else {
            if (target < compare) {
                y--;
            } else {
                x++;                    
            }
        }
    }
    return false;
};