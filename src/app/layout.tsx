import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>
          {children}
          <footer className="border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h4 className="text-lg font-bold text-foreground">Round Studio 文档站</h4>
                <p className="text-muted-foreground text-sm">我们产品的文档站</p>
              </div>
              <div className="mb-4 md:mb-0">
                2024-{new Date().getFullYear()} Round Studio.
                <p className="text-muted-foreground text-sm">Power by Fumadocs.</p>
              </div>
            </div>
          </div>
        </footer>
        </Provider>
      </body>
    </html>
  );
}
