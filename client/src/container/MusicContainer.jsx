var React = require('react');
var MusicDetails = require('../components/MusicDetails');

var MusicContainers = React.createClass({
  getInitialState: function () {
    return { music: []}
  },

  componentDidMount: function() {
    var url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      if(request.status === 200) {
        var data = JSON.parse(request.responseText);
        this.setState({music: data.feed.entry})
        console.log(data.feed.entry)
      }
    }.bind(this)
    request.send();
  },
  render: function() {
    return(
      <div>
        <MusicDetails music={this.state.music}/>
      </div>
      );
  }
});

module.exports = MusicContainers;