const { description } = require('../../package');

module.exports = {
  logo: "/img/logo/fundmaster-hero-image.png",
  title: 'FundMaster Xe',
  description: description,
  themeConfig: {
    logo: "/img/logo/fundmaster-hero-image.png",
    searchPlaceholder: 'Search...',
    search:true,
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nextLinks: true,
    prevLinks: true,
    nav: [
      {
        text: 'Getting Started', link: '/introduction/',
      },

     {
      text: 'System Modules',
      items: [
        {text: 'Admin Panel', link: '/administration/' },
        {text: 'Scheme Setup', link: '/schemes/' },  
        {text: 'Member Register', link:'/members/'},
        {text: 'Accounts', link: '/accounts/' },
        {text: 'Pensioner Register', link:'/pensioners/'},
        {text: 'Investment', link: '/investments/'},
        {text: 'Workflow', link:'/workflow/'},
        {text: 'Reports', link:'/reports/'},
      ]
    },
      {
        text: 'Glossary',
        link: '/glossary/'     
      },
      {
        text: 'Installation Guides',
        items: [
          {text: 'FundMaster on Oracle', link: '/deployment/' },
          {text: 'Postgress Database', link: '/postgressdb/' },  
          {text: 'USSD Setup', link:'/deployment/'},
        ]
      },
      {
        text: ' Video Tutorials',
        link: '/videotutorials/'
      },
    ],
    sidebar:require('./sidebar.js'),
  },
};