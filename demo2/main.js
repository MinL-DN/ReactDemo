import React from 'react';
import ReactDOM from 'react-dom';

var arr_name = ['Ben', 'Alice', 'Tom'];

ReactDOM.render(
    <div>
        {
            arr_name.map((v, i) => (<h3 key={i}>Holle {v}!</h3>))
            // arr_name.map((v, i) => <h3>Holle {v}!</h3>)
        }
    </div>,
    document.getElementById('example1')
);

var arr_dom = [
    <h1 key="1">Hello world!</h1>,
    <h2 key="2">React is awesome</h2>,
];

ReactDOM.render(
    <div>
        {arr_dom}
    </div>,
    document.getElementById('example2')
);
