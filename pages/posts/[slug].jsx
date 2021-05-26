import { useRouter } from 'next/router'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import { CMS_NAME } from '../../lib/constants'

import ErrorPage from 'next/error'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import PostHeader from '../../components/Post/Header'
import PostBody from '../../components/Post/Body'
import PostTitle from '../../components/Post/Title'
import DailyQuote from '../../components/DailyQuote'
import Date from '../../components/Post/Date'

export default function Post (props) {
  const { post, morePosts, preview } = props
  const router = useRouter()

  if (!router.isFallback && !post && !post.slug) {
    return <ErrorPage statusCode={404} />
  }

  const metaImage = post && post.ogImage && post.ogImage.url && (
    <meta property='og:image' content={post.ogImage.url} />
  )

  return (
    <Layout preview={preview}>
      <Container className='mt-3'>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className='mb-32 max-w-2xl mx-auto'>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                {metaImage}
              </Head>

              <Date date={post.date} />

              <DailyQuote className='mb-6' />

              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                author={post.author}
              />

              <div
                className='prose'
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
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
