import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsPath = `${process.cwd()}/src/_posts`

export function sortPostsByDate(posts) {
  return posts.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  )
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/** Retrieves all posts from `src/_posts` */
export async function getPosts() {
  const dir = fs.readdirSync(postsPath)

  return Promise.all(
    dir.map(async (filename) => {
      const file = fs.readFileSync(path.join(postsPath, filename))
      const slug = filename.replace(/\.mdx$/, '')
      const fileContent = file.toString()

      return {
        slug,
        fileContent,
      }
    })
  )
}

export function mapPostFrontmatter(post) {
  const { data } = matter(post.fileContent)

  return {
    ...post,
    frontmatter: data,
  }
}

export async function getPost(slug) {
  const file = fs.readFileSync(path.join(postsPath, `${slug}.mdx`))
  const fileContent = file.toString().trim()

  return fileContent
}
