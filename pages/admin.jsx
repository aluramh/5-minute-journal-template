import React from 'react'
import dynamic from 'next/dynamic'
import config from '../cms/config'

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
