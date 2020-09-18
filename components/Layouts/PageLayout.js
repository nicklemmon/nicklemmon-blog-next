import React from 'react'
import classNames from 'classnames'
import { DefaultLayout } from 'components/Layouts'
import PageTitle from 'components/PageTitle'
import Main from 'components/Main'
import Container from 'components/Container'
import MaxWidth from 'components/MaxWidth'
import './PageLayout.css'

export default class PageLayout extends React.Component {
  render() {
    const { className, title, date, children } = this.props

    return (
      <DefaultLayout className={classNames('PageLayout', className)}>
        <Main className="PageLayout-main">
          <PageTitle
            className="PageLayout-pageTitle"
            headingContent={title}
            date={date}
          />

          <Container size="lg">
            <MaxWidth size="lg" className="PageLayout-maxWidth">
              {children}
            </MaxWidth>
          </Container>
        </Main>
      </DefaultLayout>
    )
  }
}
