export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe3e2daa33d90313de21750',
                  title: 'Sanity Studio',
                  name: 'sanity-blog-studio-e5rfxyxd',
                  apiId: '4c2903f9-d0cc-4d33-ac3b-577baba216e7'
                },
                {
                  buildHookId: '5fe3e2da11f3282a4cc9cad2',
                  title: 'Blog Website',
                  name: 'sanity-blog-web-miyrdhv5',
                  apiId: 'd3e029a7-7e65-4dcf-bfbf-e5e364d270ca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/selkasse/sanity-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-blog-web-miyrdhv5.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
