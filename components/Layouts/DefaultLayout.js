import React from 'react'
import classNames from 'classnames'
import Helmet from 'react-helmet'
import Header from 'components/Header'
import Footer from 'components/Footer'
import './global.css'
import './DefaultLayout.css'

class DefaultLayout extends React.Component {
  render() {
    const { children } = this.props

    let rootPath = `/`

    if ( typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__ ) rootPath = __PATH_PREFIX__ + `/`

    return (
      <div className={ classNames( 'DefaultLayout', this.props.className ) }>
        <Helmet>
          {/* A weird way to set the lang attribute: https://github.com/gatsbyjs/gatsby/issues/1790 */}
          <html lang="en" />
        </Helmet>

        <Header className="DefaultLayout-header" />

        { children }

        <Footer className="DefaultLayout-footer" />
      </div>
    )
  }
}

export default DefaultLayout
