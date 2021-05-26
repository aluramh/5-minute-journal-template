import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { Post } from './types.d'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs () {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug (slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const payload = matter(fileContents)

  // Retrieve the data from the fileContents
  const data = payload.data
  const content = payload.content

  console.log(JSON.stringify(data, null, 2))

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field: string) => {
    if (field === 'slug') {
      items[field] = realSlug
    }

    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      if (field === 'date') {
        const parsedDate = data[field].toISOString()
        items[field] = parsedDate
      } else {
        items[field] = data[field]
      }
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
