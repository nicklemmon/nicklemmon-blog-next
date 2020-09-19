import React from 'react'
import classNames from 'classnames'
import { DefaultLayout } from 'components/Layouts'
import PageTitle from 'components/PageTitle'
import Main from 'components/Main'
import Container from 'components/Container'
import MaxWidth from 'components/MaxWidth'
import styles from './PageLayout.module.css'

export default function PageLayout(props) {
  const { className, title, date, children } = props

  return (
    <DefaultLayout className={classNames(styles.PageLayout, className)}>
      <Main>
        <PageTitle headingContent={title} date={date} />

        <Container size="lg">
          <MaxWidth size="lg">{children}</MaxWidth>
        </Container>
      </Main>
    </DefaultLayout>
  )
}
