import React from 'react'
import Container from 'components/Container'
import './BreakoutContainer.css'

export default class BreakoutContainer extends React.Component {
  render() {
    return (
      <div className="BreakoutContainer">
        <Container size="lg">{this.props.children}</Container>
      </div>
    )
  }
}
