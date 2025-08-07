import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <img 
            src="/img/docusaurus.png" 
            alt="Round Studio Logo" 
            className={styles.heroLogo}
            width="240"
            height="240"
          />
          <Heading as="h1" className={styles.heroTitle}>
            欢迎来到 <span className={styles.highlight}>Round Studio</span> 文档中心
          </Heading>
          <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.getStarted
              )}
              to="/docs/category/文档">
              开始探索
            </Link>
            <Link
              className={clsx(
                "button button--outline button--lg",
                styles.secondaryButton
              )}
              to="/docs/关于我们">
              关于我们
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Round Studio知识库 - 汇集项目经验、技术文档和最佳实践">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}