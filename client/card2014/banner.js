const React = require('react/addons')
const $ = require('jquery')

require('./banner.scss')
const bannerImg = require('./images/nativity.jpg')
const hollyImg = require('./images/holly.png')

module.exports = React.createClass({

  displayName: 'Banner',

  getInitialState() {
    return {
      backgroundImage: hollyImg
    }
  },

  componentDidMount() {
    const reactComponent = this
    $('<img/>').attr('src', bannerImg).load(function () {
      $(this).remove() // prevent memory leak
      setTimeout(function fakeTimeDelayToEnjoyTheHolly() {
        reactComponent.setState({
          backgroundReady: true,
          backgroundImage: bannerImg
        })
      }, 1000)
    })
  },

  renderStyle: function () {
    return {
      backgroundImage: "url(" + this.state.backgroundImage + ")"
    }
  },

  renderClassNames: function () {
    const cx = React.addons.classSet
    const classes = cx({
      banner: true,
      'banner--background-ready': this.state.backgroundReady
    })
    return classes
  },

  render() {
    return <div className={this.renderClassNames()} style={this.renderStyle()}></div>
  }
})