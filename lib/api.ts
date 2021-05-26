import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { ExtendedPost, Post } from './types.d'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs () {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug (slug: string, fields: (keyof ExtendedPost)[]) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const payload: any = matter(fileContents)

  // Retrieve the data from the fileContents
  const data: ExtendedPost = payload.data
  const content = payload.content

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    // Name of the .md file
    if (field === 'slug') {
      items[field] = realSlug
    }

    // The content of the file, if there is one
    if (field === 'content') {
      items[field] = content
    }

    // For everything else, add it to the objec t. These are the keys of the .md file itself.
    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

const defaultSortFunction = (post1: Post, post2: Post) => {
  return post1.date > post2.date ? -1 : 1
}

export function getAllPosts (fields = [], sortFn = defaultSortFunction) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort(sortFn)

  return posts
}
