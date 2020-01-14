export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e1e3fecc70b8b9ab324919c',
                  title: 'Sanity Studio',
                  name: 'meezy-sanity-gatsby-portfolio-studio',
                  apiId: '44009455-7f85-4787-9437-13b1ee523e3c'
                },
                {
                  buildHookId: '5e1e3fec589426a0977c62a5',
                  title: 'Portfolio Website',
                  name: 'meezy-sanity-gatsby-portfolio',
                  apiId: '36063d33-8f34-43a5-b81a-8a41b2354729'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/meezyart/meezy-sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://meezy-sanity-gatsby-portfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
