export default {
  config: {
    cms_manual_init: true,
    backend: {
      // NOTE: - If you want to test changes made to your config.yml file locally,
      // swap out "git-gateway" with "test-repo" and navigate to localhost:3000/admin/index.html
      // to view Netlify CMS locally (you can't make changes or read actual content from Git
      // this way, but it's great to verify how things will look).
      // name: test-repo
      name: 'git-gateway',
      branch: 'main'
    },
    media_folder: 'public/img',
    public_folder: 'img',
    collections: [
      {
        name: 'blog',
        label: 'Blogs',
        folder: 'src/pages/posts',
        create: true,
        slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
        fields: [
          {
            label: 'Template Key',
            name: 'templateKey',
            widget: 'hidden',
            default: 'blog-post'
          },
          { label: 'Title', name: 'title', widget: 'string' },
          { label: 'Publish Date', name: 'date', widget: 'datetime' },
          { label: 'Description', name: 'description', widget: 'text' },
          { label: 'Featured Post', name: 'featuredpost', widget: 'boolean' },
          { label: 'Featured Image', name: 'featuredimage', widget: 'image' },
          { label: 'Body', name: 'body', widget: 'markdown' },
          { label: 'Tags', name: 'tags', widget: 'list' }
        ]
      }
    ]
  }
}
