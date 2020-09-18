import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import posts from '@fixtures/posts.json'
import CardArticles from './CardArticles'


describe( 'CardArticles', () => {
  it( 'Renders links from posts', async () => {
    const { getByText, getAllByText } = render( <CardArticles posts={ posts }/> )

    posts.forEach( post => {
      expect( getByText( post.node.frontmatter.title ) ).toBeInTheDocument()
      expect( getByText( post.node.frontmatter.date ) ).toBeInTheDocument()
    } )

    expect( getAllByText( 'Read More' ).length ).toEqual( posts.length )
  } )

  it( 'Limits the number of posts via the postLimit prop', async () => {
    const { getByText, queryByText } = render( <CardArticles posts={ posts } postLimit={ 1 }/> )

    expect( getByText( 'Four Reasons why VueJS is Pretty Great' ) ).toBeInTheDocument()
    expect( queryByText( 'A Typescript Monster Battler' ) ).toBeNull()
  } )
} )
