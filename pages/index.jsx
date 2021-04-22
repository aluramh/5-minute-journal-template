import { getAllPosts } from '../lib/api'
import Link from 'next/link'
import BlogCard from '../components/BlogCard'
import Navbar from '../components/Navbar'
import MainBanner from '../components/MainBanner'

export default function IndexPage (props) {
  const { allPosts } = props
  const newestPost = allPosts[0]
  const restOfPosts = allPosts.slice(1)

  return (
    <div>
      <MainBanner />

      <div className='container mx-auto px-3 md:px-0 lg:w-2/3 xl:w-2/4'>
        {/* Title of section */}
        <div className='font-sans text-5xl font-bold mb-6'>Latest posts</div>

        {/* Posts */}
        <BlogCard post={newestPost} featured />
        {restOfPosts.map((post, i) => (
          <BlogCard post={post} key={post.title} />
        ))}
      </div>
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
