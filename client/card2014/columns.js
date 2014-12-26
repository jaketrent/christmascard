const React = require('react')

require('./columns.scss')

module.exports = React.createClass({

  displayName: 'Columns',

  renderChildren() {
    const cx = React.addons.classSet
    return React.Children.map(this.props.children, (child, i) => {
      return (
        <div className="columns__col">
          {child}
        </div>
      )
    })
  },

  render() {
    return (
      <div className="columns">
        {this.renderChildren()}
      </div>
    )
  }
})