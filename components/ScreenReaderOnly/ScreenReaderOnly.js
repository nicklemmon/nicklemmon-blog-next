import React from 'react'

export default class ScreenReaderOnly extends React.Component {
  render() {
    return (
      <span
        style={{
          border: '0',
          clip: 'rect(0 0 0 0)',
          clipPath: 'inset(50%)',
          height: '1px',
          margin: '-1px',
          overflow: 'hidden',
          padding: '0',
          position: 'absolute',
          width: '1px',
          whiteSpace: 'nowrap',
        }}
      >
        {this.props.children}
      </span>
    )
  }
}
