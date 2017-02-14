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
        <ul></ul>
        <ul>Title: {this.props.title}</ul>
        <ul>Artist: {this.props.artist}</ul>
        <ul>Genre: {this.props.category}</ul>
        <ul><a href={this.props.link}>link to itunes</a></ul>
          </div>
        </div>
      );
  }
});

module.exports = Song;