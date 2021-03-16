import PrintMarkdown from '../components/markdown/PrintMarkdown'
import {
  getDynamicPageContentBySlug,
  getAllDynamicPages,
  getPageContentBySlug
} from '../lib/markdown'
import { getAllPosts } from '../lib/api'

export default function IndexPage (props) {
  const { allPosts } = props

  return (
    <div>
      {allPosts.map(post => {
        const { title, description, slug, content } = post

        return (
          <div className='p-3 mb-3'>
            <div className='bold'>{title}</div>
            <div>{description}</div>
            <div>{slug}</div>
            <div>{content}</div>
          </div>
        )
      })}
    </div>
  )
}

export async function getStaticProps () {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ])

  return {
    props: { allPosts }
  }
}
