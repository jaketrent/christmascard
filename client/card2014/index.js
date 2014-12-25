const React = require('react')
const $ = require('jquery')

require('./styles/index.scss')

module.exports = React.createClass({

  displayName: 'card2014',

  render () {
    return (
      <div>
        <div className="banner"></div>
        <h1>Merry Christmas</h1>
      </div>
    )
  }
})