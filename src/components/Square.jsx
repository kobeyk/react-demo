// 方块
import React from 'react'

// class Square extends React.Component {

//     // 格子的构造器，已经不需要再初始化的时候保存状态了，通过父子组件传递props，可以达到互相通信（父组件的修改会影响到子组件的状态）
//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         value: null,
//     //     };
//     // }
//     render() {
//         return (
//             <button className='square' onClick={() => this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }

// 函数定义组件 -- 简单的组件都可以写成这种方式，且react还会持续优化函数定义组件

function Square(props){
    return (
        <button className='square' onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;