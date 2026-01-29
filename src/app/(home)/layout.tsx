import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import Link from 'next/link';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
      <HomeLayout {...baseOptions()}>
      {children}
      </HomeLayout>
  );
}
