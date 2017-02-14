var React = require('react');
var ReactDOM = require('react-dom');

var MusicContainer = require('./container/MusicContainer')

window.onload = function(){
  ReactDOM.render(
    <MusicContainer/>,
    document.getElementById('app')
  );
}
