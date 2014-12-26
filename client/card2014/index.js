const React = require('react')

const Banner = require('./banner')
const Columns = require('./columns')
const Family = require('./family')
const Message = require('./message')
const Title = require('./title')

require('./styles/index.scss')

module.exports = React.createClass({

  displayName: 'Card2014',

  render () {
    return (
      <div>
        <Banner />
        <Title />
        <Columns>
          <Message />
          <Family />
        </Columns>
      </div>
    )
  }
})