import React from 'react'
import dynamic from 'next/dynamic'
import config from '../cms/config'

const Article = ({ title, children }) => (
  <article>
    <h1>{title}</h1>
    {children}
  </article>
)

const ArticlePreview = () => (
  <Article title='Custom article preview'>
    <p>This is my new article.</p>
  </Article>
)

const CMSAdminPage = dynamic(
  () =>
    import('netlify-cms-app').then(CMS => {
      // Register the preview component
      // CMS.registerPreviewTemplate('blog-posts', ArticlePreview)
      CMS.init({ config })
    }),
  { ssr: false, loading: () => <p>Loading...</p> }
)

const AdminPage = () => {
  return <CMSAdminPage />
}

export default AdminPage
