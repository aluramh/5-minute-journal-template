import PrintMarkdown from '../components/markdown/PrintMarkdown'
import {
  getDynamicPageContentBySlug,
  getAllDynamicPages
} from '../lib/markdown'

export default function IndexPage ({ page }) {
  const { title, description, slug, content } = page

  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <PrintMarkdown markdown={content} />
    </div>
  )
}

export async function getStaticProps () {
  // Here we're using the getPageContentBySlug
  // as opposed to getDynamicPageContentBySlug
  // We're also passing in the string 'home' to tell it
  // we want to use the _pages/home.md file for the
  // page props
  const page = getPageContentBySlug('home', [
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
