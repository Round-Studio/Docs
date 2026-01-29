import Link from 'next/link';
import { ArrowRight, BookOpen, Rocket, BlocksIcon, LinkIcon } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "文档中心",
      description: "查看详细的 API 文档和食用指南",
      link: "/docs",
      linkText: "关于我们",
      source: "https://github.com/Round-Studio/Docs",
      sourceText: "Github"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "BedrockBoot",
      description: "一个为 Windows 开发的基岩版启动器",
      link: "/docs/bedrockboot",
      linkText: "查看文档",
      source: "https://github.com/Round-Studio/BedrockBoot",
      sourceText: "Github"
    },
    {
      icon: <BlocksIcon className="w-6 h-6" />,
      title: "RMCL",
      description: "全平台 Minecraft 启动器",
      link: "https://roundstudio.top/rmcl",
      linkText: "前往官网",
      source: "https://github.com/Round-Studio/RMCL",
      sourceText: "Github"
    },
    {
      icon: <BlocksIcon className="w-6 h-6" />,
      title: "OnePointUI.Avalonia",
      description: "一个为 Avalonia 开发的控件库",
      link: "/docs/opui",
      linkText: "查看文档",
      source: "https://github.com/Round-Studio/OnePointUI.Avalonia",
      sourceText: "Github"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "BedrockLauncher.Core",
      description: "基岩版启动核心",
      link: "/docs/blc",
      linkText: "查看文档",
      source: "https://github.com/Round-Studio/BedrockLauncher.Core",
      sourceText: "Github"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "OverrideLauncher.Core",
      description: "Java 版启动核心",
      link: "/docs/olc",
      linkText: "查看文档",
      source: "https://github.com/Round-Studio/OverrideLauncher.Core",
      sourceText: "Github"
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
          Round Studio
        </h1>

        <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
          产品文档，答疑解惑
        </p>

        <div className="bg-card rounded-xl border border-border">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            开始探索
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">产品</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我们正在进行的产品
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

              <div className="flex gap-4">
                <Link
                  href={feature.link}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium group/link"
                >
                  {feature.linkText}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>

                <Link
                  href={feature.source}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium group/link"
                >
                  {feature.sourceText}
                  <LinkIcon className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}