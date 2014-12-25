const React = require('react')
const $ = require('jquery')

require('./banner.scss')
const bannerImg = require('./images/nativity.jpg')

module.exports = React.createClass({

  displayName: 'Banner',

  getInitialState() {
    return {
      backgroundImage: ''
    }
  },

  componentDidMount() {
    const reactComponent = this
    $('<img/>').attr('src', bannerImg).load(function () {
      $(this).remove() // prevent memory leak
      reactComponent.setState({
        backgroundImage: bannerImg
      })
    })
  },

  renderStyle: function () {
    return {
      backgroundImage: "url(" + this.state.backgroundImage + ")"
    }
  },

  render() {
    return <div className="banner" style={this.renderStyle()}></div>
  }
})