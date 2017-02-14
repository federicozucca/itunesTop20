var React = require('react')
var Song = require('./Song.jsx')

var MusicDetails = React.createClass({
  render: function () {

    var musicNodes = this.props.music.map(function (music, index) {
      return ( 
          <Song title={ music["im:name"].label } artist={ music["im:artist"].label }  category={music.category.attributes.term} link={music["im:collection"].link.attributes.href} image={ music["im:image"][2].label } key={index}>
          </Song>
        )
    })

    return (
      <div className="music-details">
        <h1>UK Top 20</h1>
          { musicNodes}
      </div>
      )
  },
  propTypes: {
    music: React.PropTypes.array.isRequired,
  }
});


module.exports = MusicDetails;