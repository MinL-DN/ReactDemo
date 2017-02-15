'use strict';

var num = 4;
var obj_entry = {};

for(let a = 1; a <= num; a++){
    let _key = './demo' + a + '/main';
    obj_entry[_key] = _key + '.js';
}

console.log(obj_entry);

module.exports = {
    entry: obj_entry,

    // output: './touch/index.js',
    output: {
        path: './',
        filename: '[name].entry.js',
    },

    // devServer: {
    //     inline: true,
    //     port: 7777
    // },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
