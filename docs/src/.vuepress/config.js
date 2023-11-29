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
            {text: 'Getting Started', link: '/introduction/'},
            {
                text: 'System Modules',
                items: [
                    {text: 'Admin Panel', link: '/administration/'},
                    {text: 'Scheme Setup', link: '/schemes/'},
                    {text: 'Member Register', link: '/members/'},
                    {text: 'Accounts', link: '/accounts/'},
                    {text: 'Pensioner Register', link: '/pensioners/'},
                    {text: 'Investment', link: '/investments/'},
                    {text: 'Workflow', link: '/workflow/'},
                    {text: 'Reports', link: '/reports/'},
                ],
            },
            {text: 'Glossary', link: '/glossary/'},
            {
                text: 'Installation Guides',
                items: [
                    {text: 'FundMaster on Oracle', link: '/deployment/' },
                    {text: 'Postgress Database', link: '/deployment/postgres/' }
                ]
            },
            {text: 'Video Tutorials', link: '/videotutorials/'},
        ],
        sidebar: getSidebar(),
    },
};

function getSidebar() {
    return {
        '/glossary/': generateSidebar(
            '/glossary/',
            'FundMaster Glossary',
            [
                '',
            ]),
        '/introduction/': generateSidebar(
            '',
            'FundMaster Knowledge Base',
            [
                '/introduction/',
                '/introduction/landingPage',
                '/introduction/productsSetup',
                '/administration/',
                '/schemes/',
                '/members/',
                '/accounts/',
                '/pensioners/',
                '/reports/',
                '/workflow/',
                '/investments/',
                '/videotutorials/',
                '/deployment/',
            ]),
        '/administration/': generateSidebar(
            '/administration/',
            'Admin Panel User Guide',
            [
                '',
                'usersRegister',
                'profilesRegister',
                'profilePermissions',
                'passwordPolicySettings',
                'notifications',
                'sms',
                'email',
                'auditTrail',
                'systemRights',
                'systemUtility',
                'otherAdminSettings',
            ]),
        '/schemes/': generateSidebar(
            '/schemes/',
            'Schemes Setup User Guide',
            [
                '',
                'newScheme',
                'schemeApprovalProcess',
                'schemeSwitching',
                'otherSetup',
                'additionalSchemeInfoSetup',
                'memberClassSpecificInfo',
                'benefitsConfigurationsMatrix',
                'actuarialFactors',
                'bankers',
                'endYearParameters',
                'pensionSetupParameters',
                'pensionCalculationParameters',
                'sponsors',
                'statutory',
                'takeNotes',
                'riskAssessment',
                'serviceProviders',
            ]),
        '/members/': generateSidebar(
            '/members/',
            'Members User Guide',
            [
                '',
                'introduction',
                'newMember',
                'contributions',
                'batchContribRegister',
                'beneficiariesDetails',
                'beneficiariesApproval',
                'benefitsLogChecklist',
                'claimActivities',
                'contribReceivable',
                'contributionsDebtManagement',
                'dischargeForms',
                'existingMembers',
                'fundAccounts',
                'importingBeneficiaries',
                'importingFromTemplate',
                'memberBatchRegister',
                'memberConfigurations',
                'memberDocumentsChecklist',
                'memberEndorsement',
                'memberRegister',
                'membersApproval',
                'reservesFund',
                'transferedInClaims',
                'updatingMemberRegister',
            ]),
        '/accounts/': generateSidebar(
            '/accounts/',
            'Accounts User Guide',
            [
                '',
                'budget',
                'cashManagement',
                'creditorsDebtors',
                'fixedAssets',
                'generalLedger',
                'intro',
                'journals',
                'payablesPayments',
                'receivableReceipts',
                'setup',
            ]),
        '/pensioners/': generateSidebar(
            '/pensioners/',
            'Pensioners User Guide',
            [
                '',
                'approval',
                'deductionAndArrears',
                'introduction',
                'liabilities',
                'onboarding',
                'payroll',
            ]),
        '/reports/': generateSidebar(
            '/reports/',
            'Reports Engine User Guide',
            [
                '',
                'dashBoards',
                'dashboardComponents',
                'batchMembersReport',
                'membersBenefitReport', 
            ]),
        '/workflow/': generateSidebar(
            '/workflow/',
            'Workflow User Guide',
            [
                '',
                'adminPanel',
                'analysis',
                'intro',
                'taskMgt',
            ]),
        '/investments/': generateSidebar(
            '/investments/',
            'Investments User Guide',
            [
                '',
                'bond&Securities',
                'deposits',
                'equity',
                'fundManagement',
                'intro',
                'posting',
                'privateEquities',
                'property',
            ]),
        '/deployment/': generateSidebar(
            '/deployment/',
            'Installation Guides',
            [
                '',
                'postgres',
            ]),
            '/videotutorials/': generateSidebar(
                '/videotutorials/',
                'Videos Tutorials',
            [
                '',
                'employerEnrollment',
                'membersModule',
                'schemeSetup',
            ]),
    };
}

function generateSidebar(basePath, title, children) {
    return [
        {title, children: children.map(child => (typeof child === 'string' ? `${basePath}${child}` : child))},
        {
            title: 'Main Menu', children: [
                '/administration/',
                '/schemes/',
                '/members/',
                '/accounts/',
                '/pensioners/',
                '/reports/',
                '/workflow/',
                '/investments/',
                '/videotutorials/',
                '/deployment/',
            ]
        }
    ];
}