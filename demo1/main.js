import React from 'react';
import ReactDOM from 'react-dom';

var names = ['Alice', 'Emily', 'Kate'];

// ReactDOM.render(
//     <div>
//         <h1>Hello World1234！</h1>
//     </div>, document.getElementById('example')
// );

var HelloMessage = React.createClass({
    render: () => (<h1>Hello World！</h1>)
});

ReactDOM.render(<HelloMessage />, document.getElementById('example'));
