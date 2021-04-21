import { getAllPosts } from '../lib/api'
import Link from 'next/link'

export default function IndexPage (props) {
  const { allPosts } = props

  return (
    <div>
      {allPosts.map((post, i) => {
        const { title, description, slug, content, date } = post

        return (
          <div className='p-3 mb-3' key={`${i}-${title}`}>
            <div className='bold'>{title}</div>
            <div>{date}</div>
            <div>{description}</div>
            {/* <div>{content}</div> */}

            <button className='bg-blue-500 px-3 py-2 text-white rounded-sm hover:bg-blue-600 transition'>
              <Link href={`posts/${slug}`}>{slug}</Link>
            </button>
          </div>
        )
      })}
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
