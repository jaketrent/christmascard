const React = require('react/addons')

require('./columns.scss')

module.exports = React.createClass({

  displayName: 'Columns',

  renderChildren() {
    const cx = React.addons.classSet
    return React.Children.map(this.props.children, (child, i) => {
      const classes = cx({
        'columns__col': true,
        'flex-2': i === 0,
        'flex-1': i === 1
      })
      return (
        <div className={classes}>
          {child}
        </div>
      )
    })
  },

  render() {
    return (
      <div className="flex flex-row columns">
        {this.renderChildren()}
      </div>
    )
  }
})