import PrintMarkdown from '../../components/markdown/PrintMarkdown'
import {
  getDynamicPageContentBySlug,
  getAllDynamicPages
} from '../../lib/markdown'

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

export async function getStaticProps ({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths () {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
