const React = require('react')

require('./family.scss')

const FAMILY_MEMBERS = [{
  name: 'Jake',
  photo: require('./images/jake.jpg'),
  desc: 'Working/playing at Instructure.  Enjoying challenging work and lots of growth.  Finding excuses to make web sites such as this.'
},{
  name: 'April',
  photo: require('./images/april.jpg'),
  desc: 'As beautiful as ever.  Hard at work keeping the family functioning.  Not just that, giving much of the house a makeover.'
},{
  name: 'Dallin',
  photo: require('./images/dallin.jpg'),
  desc: 'Is an enthusiastic Kindergarten kind.  Energy abounds, resulting in leaps of body and logic.  Bringing much excitement to the world.'
},{
  name: 'Mackenzie',
  photo: require('./images/mackenzie.jpg'),
  desc: 'Finding her beautiful self.  Prancing and twirling to real and imagined ballet or princess-ready occasions.  So sweet.'
}, {
  name: 'Alaura',
  photo: require('./images/alaura.jpg'),
  desc: 'Climbing all vertical structures.  Still giving sweet hugs.  New words always coming.  Gushing parents can\'t resist her goodness.'
}]


  module.exports = React.createClass({

  displayName: 'Family',

  renderListItems() {
    return FAMILY_MEMBERS.map((member) => {
      var style = {
        backgroundImage: 'url(' + member.photo + ')'
      }
      return (
        <li className="family__list-item">
          <p className="family__desc">
            <div className="family__photo" style={style}></div>
            <h3 className="family__name">{member.name}</h3>
            {member.desc}
          </p>
        </li>
      )
    })
  },

  render() {
    return (
      <div className="family">
        <ul className="family__list">
          {this.renderListItems()}
        </ul>
      </div>
    )
  }

})