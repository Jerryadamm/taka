import { DocSearch } from '@docsearch/react';
import '@docsearch/css'; // Import CSS Algolia

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Taka</h1>
        <p className="hero__subtitle">
          Find User Guides, Examples, API and CLI Reference Material, Tutorials, and more.
        </p>
        <div className="search-container">
          <DocSearch
            appId={process.env.APPLICATION_ID}
            apiKey={process.env.API_KEY}
            indexName="YOUR_INDEX_NAME"
            placeholder="Search documentation..."
          />
        </div>
      </div>
    </header>
  );
} 