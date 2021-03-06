import React, { Component } from 'react';
import { Icon } from 'antd';
class Tuijian extends Component {
    state = {
        msg:'start'
    }
    render(){
        return(
            <div className={'tuijian'}>
                <div className={'tj_title'}>{this.props.mySel}{this.props.ind}</div>
                <div className={'tj_p'}>p{this.props.ind}</div>
                <div className={'tj_do'}>
                    <a onClick={this.pl.bind(this)}><Icon type='message' style={{fontSize:'20px'}}/><span>xxx条评论</span></a>
                    <a><Icon type='share-alt' style={{fontSize:'20px'}}/><span>分享</span></a>
                    <a><Icon type='heart' style={{fontSize:'20px'}}/><span>收藏</span></a>
                    <a><Icon type='crown' style={{fontSize:'20px'}}/><span>感谢</span></a>
                    <a>{this.state.msg}</a>
                </div>
            </div>
        )
    }
    pl(){ // 子传父
        this.props.zitofu('jack');
    }
    componentDidMount() {
        window.store.subscribe(() => { // subscribe 监听函数
            let state = window.store.getState();
            console.log('child',state.type)
            if (state.type === 'msg') {
                this.setState({
                    msg: state.data
                });
            }
        });
    }
}
export default  Tuijian