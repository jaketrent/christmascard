const React = require('react')

require('./message.scss')

module.exports = React.createClass({

  displayName: "Message",

  render() {
    return (
      <div className="message">
        <p>
          It's that special time of year when we remember with greater effort and ease the great gifts that our
          Heavenly Father has blessed us with.  We are so grateful for the birth of His Beloved Son.  His birth
          marked the central point in time and continues to be central in our thoughts year after year as we
          commemorate His prophesied coming to the Earth.
        </p>
        <p>
          We know that Jesus Christ is the very Son of God, the Savior of all mankind.  He lived and died for us.
          He lives again today and has restored His Church on the Earth.  Already He speaks again to all of
          us through His prophet, called and ordained as His representative on Earth, Thomas S. Monson.
        </p>
        <p>
          We have been touched again this year to realize our great dependence on Jesus Christ for our happiness
          and welfare.  He has been generous and gracious to us at every opportunity.  We are eternally thank
          ful to our Heavenly Father for the gift of His divine Son.
        </p>
        <p>
          Merry Christmas, and God bless us, every one!
        </p>
      </div>
    )
  }
})