/*
 * 自创标签用法（props）
 */

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var arr_name = ['Ben', 'Alice', 'Tom'];

var Holle = React.createClass({
    render: function(){
        return (
            <div>
                <h2>自创标签用法（props）</h2>
                {
                    arr_name.map((v, i) => (<h3 key={i}>Holle {v}!</h3>))
                }
                <h5>By {this.props.author}</h5>
            </div>
        );
    }
});

ReactDOM.render(<Holle author="MinL" />, document.getElementById('example1'));

/*
 * 嵌套组件用法
 */
var Nest = React.createClass({
    render: function(){
        return (
            <ul>
                {
                    React.Children.map(this.props.children, function(v, i){
                        return <li key={i}>{v}</li>;
                    })
                }
            </ul>
        );
    }
});

ReactDOM.render(
    <div>
        <h2>嵌套组件用法</h2>
        <Nest>
        {
            arr_name.map((v, i) => (<h3 key={i}>Holle {v}!</h3>))
        }
        </Nest>
    </div>
    , document.getElementById('example2')
);

/*
 * Props 验证
 */
var PropsCheck = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function(){
        return (
            <div>
                <h2>Props 验证</h2>
                <h3> {this.props.title}</h3>
            </div>
        );
    }
});

// ReactDOM.render(<PropsCheck title={1234} />, document.getElementById('example3'));
ReactDOM.render(<PropsCheck title={'1234'} />, document.getElementById('example3'));

/*
 * 自定义方法
 */
var Aa = React.createClass({
    aa: function(){
        alert(1234);
    },
    render: function(){
        return (
            <div>
                <h2>自定义方法</h2>
                <input type="button" value="信息" onClick={this.aa}/>
            </div>
        );
    }
});

ReactDOM.render(<Aa/>, document.getElementById('example4'));

/*
 * state标志位
 */
var StateCheck = React.createClass({
    getInitialState: function(){
        return {
            liked: false
        };
    },
    aa: function(){
        this.setState({liked: !this.state.liked});
    },
    render: function(){
        return (
            <div>
                <h2>state标志位</h2>
                <input type="button" value={this.state.liked} onClick={this.aa}/>
            </div>
        );
    }
});

ReactDOM.render(<StateCheck/>, document.getElementById('example5'));

/*
 * 类似的数据双向绑定
 */
var Binding = React.createClass({
    getInitialState: function(){
        return {
            msg: '1234'
        };
    },
    aa: function(event){
        this.setState({msg: event.target.value});
    },
    render: function(){
        var msg = this.state.msg;
        return (
            <div>
                <h2>类似的数据双向绑定</h2>
                <input type="text" value={msg} onChange={this.aa}/>
                <p>
                    {msg}
                </p>
            </div>
        );
    }
});

ReactDOM.render(<Binding/>, document.getElementById('example6'));

/*
 * 类似vue的计算属性
 */
var Computer = React.createClass({
    getInitialState: function () {
        return {
            opacity: 1.0
        };
    },
    componentDidMount: function () {
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) opacity = 1.0;

            this.setState({
                opacity: opacity
            });
        }.bind(this), 100);
    },
    render: function(){
        return (
            <div style={{opacity: this.state.opacity}}>
                Hello {this.props.name}
            </div>
        );
    }
});

ReactDOM.render(<Computer name="MinL"/>, document.getElementById('example7'));

/*
 * 数据请求
 */
var UserGist = React.createClass({
    getInitialState: function(){
        return {
            username: '',
            lastGistUrl: '',
            list: []
        };
    },
    componentDidMount: function(){
        var self = this;
        $.get(this.props.url, function(re){
            self.setState({
                list: re
            });
        });
    },
    render: function(){

        var $state = this.state;

        return (
            <div>
                <h2>异步获取数据</h2>
                <ol style={{wordBreak: 'break-all'}}>
                    {
                        $state.list.map((v, i) => <li key={i}><a href={v.comments_url}>{v.comments_url}</a></li>)
                    }
                </ol>
            </div>
        );
    }
});

ReactDOM.render(<UserGist url="https://api.github.com/users/octocat/gists"/>, document.getElementById('example8'));

/*
 * promise
 */
var PromiseDemo = React.createClass({
    getInitialState: function(){
        return {
            loading: true,
            error: null,
            list: null
        };
    },
    componentDidMount: function(){
        var self = this;

        self.props.promise.then(
            list => self.setState({loading: false, list: list}),
            error => self.setState({loading: false, error: error})
        );
    },
    render: function(){

        var $state = this.state;

        if($state.loading){
            return (<span>loading...</span>);
        }else if($state.error){
            return <span>Error: {$state.error.message}</span>;
        }else{
            return (
                <div>
                    {
                        $state.list.map((v, i) => <li key={i}><a href={v.comments_url}>{v.comments_url}</a></li>)
                    }
                    <span>完成！</span>
                </div>
            );
        }
    }
});

ReactDOM.render(
    <div>
        <h2>Promise</h2>
        <PromiseDemo promise={$.getJSON('https://api.github.com/users/octocat/gists')} />
    </div>
    , document.getElementById('example9'));
