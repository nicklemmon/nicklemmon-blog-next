import React from 'react'
import { DefaultLayout } from 'components/Layouts'
import Hero from 'components/Hero'
import Main from 'components/Main'
import BreakoutContainer from 'components/BreakoutContainer'
import MaxWidth from 'components/MaxWidth'
import './LandingLayout.css'

export default class LandingLayout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <DefaultLayout className="LandingLayout">
        <Main className="LandingLayout-main">
          <Hero className="LandingLayout-hero" />

          <MaxWidth className="LandingLayout-sidebar" size="xl">
            <BreakoutContainer>{children}</BreakoutContainer>
          </MaxWidth>
        </Main>
      </DefaultLayout>
    )
  }
}
