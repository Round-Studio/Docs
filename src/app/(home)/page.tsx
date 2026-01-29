import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "文档中心",
      description: "查看详细的API文档和使用指南",
      link: "/docs",
      linkText: "查看文档"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background/50 to-background">
      <div className="flex flex-col items-center justify-center text-center py-20 px-4">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <span className="mr-2">🎉</span>
          欢迎使用来到 Round Studio 文档站
        </div>
        
        <h1 className="text-5xl font-bold tracking-tight text-foreground mb-6 max-w-3xl">
          Round Studio 产品文档，答疑解惑
        </h1>
        
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
          emm...凑合看吧.jpg
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            开始探索
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          
          <Link
            href="/examples"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-foreground bg-card border border-border rounded-lg hover:bg-accent transition-all duration-200 shadow-sm hover:shadow"
          >
            查看示例
          </Link>
        </div>
      </div>

      {/* 功能卡片区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">核心功能</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            为开发者和团队提供全面的文档解决方案
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>
              
              <Link
                href={feature.link}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium group/link"
              >
                {feature.linkText}
                <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}