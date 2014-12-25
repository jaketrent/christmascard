const React = require('react')

require('./footer.scss')
const heartImg = require('./images/heart.png')

module.exports = React.createClass({

  displayName: 'Footer',

  render() {
    return (
      <div className="footer">
        <div className="footer__sig">
          <img className="footer__heart" src={heartImg} />
          <span className="footer__comma">,</span>
          <span className="footer__desc">The Trents</span>
        </div>
        <div className="footer__tagline">
          Christmas 2014
        </div>

      </div>
    )
  }
})