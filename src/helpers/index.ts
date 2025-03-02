import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { POSTS_PATH } from '../constants'
import type { Post } from '../types/posts'

export function sortPostsByDate(posts: Array<Post>) {
  return posts
    .filter((post) => typeof post.frontmatter.date === 'string')
    .sort((a, b) => {
      const nextPostDate = b.frontmatter.date as string
      const prevPostDate = a.frontmatter.date as string

      return new Date(nextPostDate).getTime() - new Date(prevPostDate).getTime()
    })
}

export function formatDate(date: string) {
  const [year, month, day] = date.split('-').map(Number)

  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/** Retrieves all posts from `src/_posts` */
export async function getPosts(): Promise<Array<Post>> {
  const dir = fs.readdirSync(POSTS_PATH)

  return Promise.all(
    dir.map(async (filename) => {
      const file = fs.readFileSync(path.join(POSTS_PATH, filename))
      const slug = filename.replace(/\.mdx$/, '')
      const fileContent = file.toString()
      const { data } = matter(fileContent)

      return {
        slug,
        fileContent,
        frontmatter: data,
      }
    })
  )
}

export async function getPost(slug: string) {
  const file = fs.readFileSync(path.join(POSTS_PATH, `${slug}.mdx`))
  const fileContent = file.toString().trim()

  return fileContent
}
