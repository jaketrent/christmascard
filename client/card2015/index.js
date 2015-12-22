import React from 'react'
import styleable from 'react-styleable'

import Ball from './ball'
import css from './index.css'
import Tree from './tree'

const cards = {
  benson: { left: 281, top: 142, backgroundPosition: -116 },
  alaura: { left: 380, top: 232 },
  mackenzie: { left: 225, top: 286, backgroundPosition: -198 },
  dallin: { left: 247, top: 414 },
  april: { left: 359, top: 337, backgroundPosition: -63 },
  jake: { left: 403, top: 444, backgroundPosition: -63 }
}

class Card extends React.Component {
  state = {
    activeCards: Object.keys(cards).reduce((acc, name) => {
      acc[name] = false
      return acc
    }, {})
  }
  constructor() {
    super()
    this.handleClickBall = this.handleClickBall.bind(this)
  }
  handleClickBall(name) {
    this.setState({
      activeCards: {
        ...this.state.activeCards,
        [name]: !this.state.activeCards[name]
      }
    })
  }
  renderBalls() {
    return Object.keys(cards).map(name => {
      return (
        <Ball style={cards[name]}
              onClick={this.handleClickBall}
              name={name}
              isActive={this.state.activeCards[name]} />
      )
    })
  }
  render() {
    return (
      <div className={this.props.css.root}>
        <Tree>
          {this.renderBalls()}
        </Tree>
      </div>
    )
  }
}

export default styleable(css)(Card)
