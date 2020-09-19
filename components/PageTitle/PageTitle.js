import React from 'react'
import classNames from 'classnames'
import Container from 'components/Container'
import MaxWidth from 'components/MaxWidth'
import Heading from 'components/Heading'
import Highlight from 'components/Highlight'
import styles from './PageTitle.module.css'

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
      <Container className={classNames(styles.PageTitle, className)} size="xl">
        <MaxWidth size="lg">
          <div tabIndex="-1" ref={this.title}>
            <Heading className={styles.Heading} level="1">
              <Highlight>{headingContent}</Highlight>
            </Heading>
          </div>

          {date && <div className={styles.Meta}>{date}</div>}
        </MaxWidth>

        <div className={styles.Overlay} role="presentation" />

        <img
          className={styles.Image}
          src="public/page-bg.png"
          role="presentation"
          alt=""
        />
      </Container>
    )
  }
}
