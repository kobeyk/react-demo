 // 判断格子中的棋子是否赢
 
 var COMMON_JS = {
    calculateWinner:function(squares) {

        // 横着、竖着、斜着三个连一起的都是赢
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            // 取出每一行的三个值
            const [a, b, c] = lines[i];
            // 首先保证第一个格子有值，然后判断它与后面两个格子的棋子是否相等，如果相等的话，那就是a格子里面的棋获胜
            if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
                return squares[a];
            }
        }
        return null;
    },
 };

 export default COMMON_JS;
 