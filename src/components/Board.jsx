// 棋盘
import React from 'react';
import Square from './Square'
import COMMON_JS from '../js/common.js'
class Board extends React.Component {

    // 初始化每个方块的状态
    // constructor() {
    //     super();
    //     this.state = {
    //         // 先用九个空值填充一下格子状态数组
    //         squares: Array(9).fill(null),
    //         // 设置X为先手棋
    //         xIsNext: true,
    //     }
    // }

    // 方法，根据格子数组的状态值，初始化一个格子组件
    // 注意，通过props属性数组，棋盘组件传递两个值给格子组件，一个是props.value,一个是props.onClick()
    renderSquare(i) {
        return <Square value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)} />;
    }

    render() {
        return (
            <div>
                {/* 井字格，3*3 */}
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;