// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Round Studio 文档中心',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://round-studio.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Round-Studio/MinecraftYJQ', // Usually your GitHub org/user name.
  projectName: 'round-studio.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Round Studio 文档中心',
        logo: {
          alt: 'Round Studio 文档中心 Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            position: 'left',
            label: '文档',
            to: '/docs/category/文档'
          },
          {
            to: '/docs/文档/产品文档/RMCL/用户文档/00开始使用%20RMCL',
            label: 'RMCL 使用文档',
            position: 'right',
          },
          {
            href: 'https://roundstudio.top',
            label: '官网',
            position: 'right',
          },
          {
            href: 'https://github.com/Round-Studio',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '快捷链接',
            items: [
              {
                label: 'OverrideLauncher.Core',
                to: '/docs/产品文档/%E6%96%87%E6%A1%A3/OverrideLauncher.Core/%E4%BB%8B%E7%BB%8D',
              },
              {
                label: 'BedrockLauncher.Core',
                to: '/docs/产品文档/文档/BedrockLauncher.Core/Introduct',
              },
              {
                label: '关于我们',
                to: '/docs/关于我们',
              }
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Round-Studio',
              },
              {
                label: '官网',
                href: 'https://roundstudio.top',
              }
            ],
          },
          {
            title: '联系我们',
            items: [
              {
                label: '审核 & 交流群',
                href: 'https://qm.qq.com/q/bZOmvOGHf2',
              },
              {
                label: 'RMCL 反馈交流 ① 群',
                href: 'https://qm.qq.com/q/tmjXK2qqY0',
              },
              {
                label: '加入我们',
                to: '/docs/加入我们',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} | Round Studio Document Center. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
