import React from 'react'

export default function Post({ children, frontMatter }) {
  return (
    <div>
      <h1>{frontMatter.title}</h1>

      {children}
    </div>
  )
}
