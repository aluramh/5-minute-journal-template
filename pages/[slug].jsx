import PrintMarkdown from '../components/markdown/PrintMarkdown'
import {
  getDynamicPageContentBySlug,
  getAllDynamicPages
} from '../lib/markdown'

export default function DynamicPage ({ page }) {
  const { title, description, slug, content } = page

  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      {/* we'll go into the PrintMarkdown component later */}
      <PrintMarkdown markdown={content} />
    </div>
  )
}

export async function getStaticProps ({ params }) {
  const { slug } = params

  // Pass in the fields that we want to get
  const page = getDynamicPageContentBySlug(slug, [
    'title',
    'description',
    'slug',
    'content'
  ])

  return {
    props: {
      page: {
        ...page
      }
    }
  }
}

export async function getStaticPaths () {
  const posts = getAllDynamicPages(['slug'])
  const paths = posts.map(({ slug }) => ({
    params: {
      slug
    }
  }))
  return {
    paths,
    fallback: false
  }
}
