import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Round Studio 文档站'
    },
    links: [
      {
        text: '文档',
        url: '/docs',
        active: 'nested-url'
      },
      {
        text: 'GitHub',
        url: 'https://github.com/Round-Studio',
        external: true
      }
    ]
  };
}
