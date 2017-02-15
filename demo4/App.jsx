import React from 'react';
var App = React.createClass({
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

export default App;
