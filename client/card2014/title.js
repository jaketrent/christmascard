const React = require('react')

require('./title.scss')

module.exports = React.createClass({

  displayName: 'Title',

  render() {
    return <h1 className="title">Merry Christmas!</h1>
  }
})