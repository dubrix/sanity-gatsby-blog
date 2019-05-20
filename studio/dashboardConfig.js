export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ce28e9e97442614e3183898',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qjtztqtf',
                  apiId: 'cdbdc54b-7995-4dfd-acb1-5a161588ff1e'
                },
                {
                  buildHookId: '5ce28e9e97442684b4183911',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-sr5b5c6i',
                  apiId: 'fcffeb2a-ceb5-4f02-b093-87db8fb8dbd4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dubrix/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-sr5b5c6i.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
