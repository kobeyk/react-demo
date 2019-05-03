// 游戏组件
import React from 'react'
import Board from './Board'
import COMMON_JS from '../js/common.js'
class Game extends React.Component {

    // 将Board棋盘组件的state状态值提升到Game组件的构造器中
    constructor() {
        super();
        this.state = {
            // 先用九个空值填充一下格子状态数组
            history: [{
                squares: Array(9).fill(null),
            }],
            // 设置X为先手棋
            xIsNext: true,
        };
    }

     // 写方法handleClick(i)
     handleClick(i) {

        const history = this.state.history;
        const current = history[history.length - 1];
        // 点击的时候，初始化格子数组的状态 都是X
        // 使用 .slice() 方法将之前的数组数据浅拷贝到了一个新的数组中，而不是修改已有的数组
        const squares = current.squares.slice();
        //如果一方获胜了，或者当前方格内已经落子（就是我在一个格子下了一个妻子，你就不能再下了），就无法继续落子的判断逻辑：
        if (COMMON_JS.calculateWinner(squares) || squares[i]) {
            return;
          }
        // 类似于Java的三目运算符
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        // 每下一步棋，状态取反
        this.setState({history:history.concat([{squares:squares}]), xIsNext: !this.state.xIsNext })
        console.log(current.squares)
    }


    render() {

        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = COMMON_JS.calculateWinner(current.squares);
        // let 声明变量
        let status;
        if (winner) {
            // 如果不等于空，看看是谁获胜了
            status = 'Winner is :' + winner;
        } else {
            // 如果等于空的话，说明没人获胜，继续下
            status = "Next Player : " + (this.state.xIsNext ? "X" : 'O');
        }

        return (
            <div className='game'>
                <div className='game-board'>
                    <Board squares={current.squares} onClick={(i)=>this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div>{ status }</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}



export default Game;