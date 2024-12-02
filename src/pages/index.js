import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Redirect ke halaman docs dengan query pencarian
    if (searchQuery.trim()) {
      window.location.href = `/docs/search?q=${encodeURIComponent(searchQuery)}`;
      // Atau bisa juga redirect ke halaman spesifik berdasarkan kata kunci
      // Contoh:
      if (searchQuery.toLowerCase().includes('encryption')) {
        window.location.href = '/docs/Data Encryption/Api-Documentation/register-succes';
      } else if (searchQuery.toLowerCase().includes('tokenization')) {
        window.location.href = '/docs/Tokenization/Api-Documentation/doc1';
      } else if (searchQuery.toLowerCase().includes('masking')) {
        window.location.href = '/docs/Data Masking/Api-Documentation/doc1';
      }
    }
  };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">Find User Guides, Examples, API and CLI Reference Material, Tutorials, and more.</p>
        <div className={styles.buttons}>
          <form onSubmit={handleSearch} className="search-container">
            <input
              type="text"
              placeholder="Search documentation..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
