// components/giscus-comments.tsx
'use client';

import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// 动态导入以避免 SSR
const Giscus = dynamic(
  () => import('@giscus/react').then((mod) => mod.default),
  { 
    ssr: false,
    loading: () => (
      <div className="h-20 flex items-center justify-center text-gray-500">
        加载评论中...
      </div>
    )
  }
);

export function GiscusComments() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <Suspense fallback={
        <div className="h-20 flex items-center justify-center">
          加载评论中...
        </div>
      }>
        <Giscus
          id="comments"
          repo="Round-Studio/Docs.Comment"
          repoId="R_kgDORHkkRQ"
          category="Show and tell"
          categoryId="DIC_kwDORHkkRc4C10K1"
          mapping="pathname"
          term="Welcome to @giscus/react component!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={resolvedTheme || 'light'}
          lang="zh-CN"
          loading="lazy"
        />
      </Suspense>
    </div>
  );
}