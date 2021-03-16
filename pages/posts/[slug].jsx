import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Layout from '../../components/layout'
import Container from '../../components/Container'

import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import { CMS_NAME } from '../../lib/constants'

export default function Post (props) {
  const { post, morePosts, preview } = props
  const router = useRouter()

  console.log({ props })

  console.log([router.isFallback, post, post.slug])

  if (!router.isFallback && !post && !post.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <Head>
              <title>
                {post.title} | Next.js Blog Example with {CMS_NAME}
              </title>
              <meta property='og:image' content={post.ogImage.url} />
            </Head>
            <div>
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            </div>
            <article className='prose mb-32'>{post.content}</article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps ({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'description',
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
