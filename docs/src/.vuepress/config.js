const {description} = require('../../package');

module.exports = {
    logo: "/img/logo/fundmaster-hero-image.png",
    title: 'FundMaster Xe',
    description: description,
    themeConfig: {
        logo: "/img/logo/fundmaster-hero-image.png",
        searchPlaceholder: 'Search...',
        search: true,
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        nextLinks: true,
        prevLinks: true,
        nav: [
            {text: 'Member Self Service', link: '/mss/'},
        ],
        sidebar: getSidebar(),
    },
};

function getSidebar() {
    return {
        '/mss/': generateSidebar(
            '/mss/',
            'Member Self Service',
        [
            '',
            'accessingmssportal',
            'userprofiles'
        ]),
    };
}

function generateSidebar(basePath, title, children) {
    return [
        {title, children: children.map(child => (typeof child === 'string' ? `${basePath}${child}` : child))},
    ];
}