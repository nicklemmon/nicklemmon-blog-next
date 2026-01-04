import React from 'react'
import Card from '../card'
import Heading from '../heading'
import LongForm from '../long-form'
import ResumePosition from './resume-position'
import styles from './resume.module.css'

export default function Resume() {
  return (
    <div className="resume">
      <Card className={styles['card']}>
        <LongForm>
          <Heading as="h3">Goals</Heading>

          <p>
            I am looking to build accessible, user-friendly web experiences
            using the latest web&nbsp;technologies.
          </p>

          <p>
            I am passionate about making great products, and making the teams
            I&rsquo;m on even greater.
          </p>
        </LongForm>
      </Card>

      <Card className={styles['card']}>
        <LongForm>
          <Heading as="h3">Skills</Heading>

          <ul className="resume-skills">
            <li>Extensive experience authoring WCAG AA compliant HTML</li>

            <li>
              Extensive experience authoring CSS, Sass, and Post CSS - including
              experience with Flexbox, CSS Grid, and CSS Custom Properties
            </li>

            <li>Extensive responsive interface design experience</li>

            <li>
              Significant experience developing component-driven design systems
            </li>

            <li>Experience with BEM, SuitCSS, and Atomic CSS architecture</li>

            <li>ES6 JavaScript</li>

            <li>Command line git and git GUI experience</li>

            <li>Jest and Cypress testing experience</li>

            <li>
              Experience automating builds with Webpack, Parcel JS, NPM scripts,
              Gulp, and Grunt
            </li>

            <li>Substantial jQuery, React and Vue.js experience</li>

            <li>
              GitLab CI and Travis CI continuous integration and deployment
              experience
            </li>

            <li>Some experience with bash scripting</li>

            <li>Adobe Illustrator and Photoshop Experience</li>

            <li>SVG illustration and animation experience</li>

            <li>Design prototyping in Sketch</li>

            <li>
              Substantial experience training and coaching junior developers
            </li>

            <li>
              <em>and</em> people skills!
            </li>
          </ul>
        </LongForm>
      </Card>

      <Card className={styles['card']}>
        <Heading as="h3">Experience</Heading>

        <ResumePosition
          heading="Frontend Engineer"
          subheading="SparkPost"
          startDate="August 2019"
          endDate="Current"
        >
          <ul>
            <li>
              Frontend development for the SparkPost web application built with
              React and Redux
            </li>

            <li>
              Providing expertise with regards to accessibility and testing
              automation best practices
            </li>

            <li>Leading the development of an application redesign</li>

            <li>Received the Q1 2020 TLC Award</li>
          </ul>
        </ResumePosition>

        <ResumePosition
          heading="Principal UI Designer"
          subheading="BB&T Digital Services"
          startDate="May 2018"
          endDate="August 2019"
        >
          <ul>
            <li>
              Design and frontend development for a commercial application
              management platform
            </li>

            <li>
              Team leadership for frontend developers within the project and
              outside the project
            </li>

            <li>
              Provided insight and input regarding company merger with regards
              to accessibility standards
            </li>

            <li>Provided frontend development training for team members</li>

            <li>
              Presented to CEO and Executive Management to showcase new DevOps
              capability available at BB&amp;T
            </li>

            <li>
              Provided ongoing mentorship and support for junior developers
            </li>
          </ul>
        </ResumePosition>

        <ResumePosition
          heading="Senior UI Designer"
          subheading="BB&T Digital Services"
          startDate="May 2016"
          endDate="May 2018"
        >
          <ul>
            <li>
              Design team lead for online banking platform with 1 million plus
              users
            </li>

            <li>
              Provided leadership from an accessibility standpoint with regards
              to component design and development
            </li>

            <li>Developed first pattern library within BB&amp;T</li>
          </ul>
        </ResumePosition>

        <ResumePosition
          heading="Web Designer I"
          subheading="BB&T Digital Services"
          startDate="October 2015"
          endDate="May 2016"
        >
          <ul>
            <li>
              HTML and CSS development for the U by BB&amp;T online banking
              platform
            </li>

            <li>
              CSS authoring support for marketing emails via the Marketo
              platform
            </li>
          </ul>
        </ResumePosition>
      </Card>

      <Card className={styles['card']}>
        <LongForm>
          <Heading as="h3">Awards, Achievements, and Certifications</Heading>

          <ul>
            <li>
              <a href="https://www.accessibilityassociation.org/wascertification">
                Web Accessibility Specialist (WAS)
              </a>{' '}
              certified
            </li>

            <li>BB&amp;T Olympian Award winner</li>

            <li>
              Master&rsquo;s of Social Work from the University of North
              Carolina at Chapel Hill
            </li>

            <li>
              Bachelor&rsquo;s of Psychology from the University of North
              Carolina at Chapel Hill
            </li>
          </ul>
        </LongForm>
      </Card>

      <Card className={styles['card']}>
        <LongForm>
          <Heading as="h3">Additional Experience</Heading>

          <ul>
            <li>
              Vice Chair of the{' '}
              <a href="https://www.ncceh.org/">
                North Carolina Coalition to End Homelessness
              </a>{' '}
              Board of Directors
            </li>

            <li>
              Over half a decade of service experience including intensive
              homeless outreach and a year of AmeriCorps service
            </li>
          </ul>
        </LongForm>
      </Card>
    </div>
  )
}
