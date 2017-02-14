var React = require('react');

var Song = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div className="song">
      <img src={this.props.image}></img>
       <div>
        <ul>N° {this.props.position}</ul>
        <ul>Title: {this.props.title}</ul>
        <ul>Artist: {this.props.artist}</ul>
        <ul>Genre: {this.props.category}</ul>
        <ul>
        <a href={this.props.link}>
        <img border="0" alt="W3Schools" src="http://choose.audioboom.com/wp-content/uploads/2015/10/itunes-logo.jpg" width="150" height="50"></img>
        </a>

        </ul>
          </div>
        </div>
      );
  }
});

module.exports = Song;