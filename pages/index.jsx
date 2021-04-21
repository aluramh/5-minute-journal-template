import { getAllPosts } from '../lib/api'
import Link from 'next/link'
import BlogCard from '../components/BlogCard'

export default function IndexPage (props) {
  const { allPosts } = props
  const newestPost = allPosts[0]
  const restOfPosts = allPosts.slice(1)

  return (
    <div className='container mx-auto'>
      <div className='text-2xl mb-2'>Latest post:</div>
      <BlogCard post={newestPost} featured />
      {restOfPosts.map((post, i) => (
        <BlogCard post={post} key={post.title} />
      ))}
    </div>
  )
}

export async function getStaticProps () {
  const fields = [
    'title',
    'date',
    'description',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ]

  const allPosts = getAllPosts(fields)

  return {
    props: { allPosts }
  }
}
