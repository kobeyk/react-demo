import React from 'react';

class ShopList extends React.Component{
    render(){
        return(
            <div>
                <h1>商品列表 for {this.props.name}</h1>
                <ul>
                    <li>苹果</li>
                    <li>香蕉</li>
                    <li>橘子</li>
                </ul>
            </div>
        );
    }
}

export default ShopList;