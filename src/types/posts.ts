export type Post = {
  fileContent: string
  slug: string
  frontmatter: {
    date?: string
    title?: string
    description?: string
    image?: string
  }
}
