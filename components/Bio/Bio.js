import React from 'react'
import Card from 'components/Card'
import Heading from 'components/Heading'
import LongForm from 'components/LongForm'
import Me from './me.png'
import './Bio.css'

export default class Bio extends React.Component {
  render() {
    return (
      <Card className="Bio">
        <div className="Bio-imgContainer">
          <img className="Bio-img" src={Me} alt="Nick Lemmon" />
        </div>

        <LongForm className="Bio-content">
          <Heading level="4">About Me</Heading>

          <p>
            I'm a frontend developer in Columbia, Maryland who also happens
            to have an{' '}
            <a
              rel="noopener"
              href="https://en.wikipedia.org/wiki/Master_of_Social_Work"
            >
              MSW
            </a>
            . I'm also a certified{' '}
            <a
              href="https://www.accessibilityassociation.org/wascertification"
              rel="noopener"
            >
              Web Accessibility Specialist
            </a>
            !
          </p>

          <p>
            I'm driven to design and build accessible design systems with a
            great underlying developer experience in mind.
          </p>
        </LongForm>
      </Card>
    )
  }
}
