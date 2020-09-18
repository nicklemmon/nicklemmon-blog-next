import React from 'react'
import classNames from 'classnames'
import Container from 'components/Container'
import MaxWidth from 'components/MaxWidth'
import Heading from 'components/Heading'
import Highlight from 'components/Highlight'
import './PageTitle.css'
import pageBackgroundImage from './page-bg.png'

export default class PageTitle extends React.Component {
  constructor(props) {
    super(props)

    this.title = React.createRef()
  }

  componentDidMount() {
    this.title.current.focus()
    window.scrollTo(0, 0)
  }

  render() {
    const { className, headingContent, date } = this.props

    return (
      <Container className={classNames('PageTitle', className)} size="xl">
        <MaxWidth className="PageTitle-maxWidth" size="lg">
          <div tabIndex="-1" ref={this.title}>
            <Heading className="PageTitle-heading" level="1">
              <Highlight>{headingContent}</Highlight>
            </Heading>
          </div>

          {date && <div className="PageTitle-meta">{date}</div>}
        </MaxWidth>

        <div className="PageTitle-overlay" role="presentation" />

        <img
          className="PageTitle-image"
          src={pageBackgroundImage}
          role="presentation"
          alt=""
        />
      </Container>
    )
  }
}
