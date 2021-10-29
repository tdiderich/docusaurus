// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Query.AI',
  tagline: 'The Security Control Plane',
  url: 'https://docs.query.ai/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'queryai',
  projectName: 'docs', 

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://blogs.query.ai/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Query.AI',
        logo: {
          alt: 'Query.AI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://support.query.ai/',
            label: 'Support',
            position: 'left',
          },
          {
            href: 'https://blogs.query.ai/',
            label: 'Blog',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/queryai',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/query_ai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Support',
                href: 'https://support.query.ai/',
              },
              {
                label: 'Blog',
                href: 'https://blogs.query.ai/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Query.AI Docs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
