import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Data Encryption',
    icon: require('@site/static/img/Data_Encryption.png').default,
  },
  {
    title: 'Tokenization',
    icon: require('@site/static/img/Tokenization.png').default,
  },
  {
    title: 'Data Masking',
    icon: require('@site/static/img/Data_Masking.png').default,
  },
];

function Feature({ title, icon, description }) {
  const commonStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px'
  };

  // Fungsi untuk mendapatkan path yang sesuai berdasarkan title dan jenis dokumentasi
  const getDocPath = (title, docType) => {
    const basePath = `/docs/${title}`;
    
    switch(docType) {
      case 'Api-Documentation':
        return title === 'Data Encryption' 
          ? `${basePath}/${docType}/register-succes`
          : `${basePath}/${docType}/doc1`;
      case 'Functional-Documentation':
        return `${basePath}/${docType}/doc3`;
      case 'User-Guide':
        return `${basePath}/${docType}/doc5`;  // Path khusus untuk User Guide
      default:
        return `${basePath}/${docType}/doc1`;
    }
  };

  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md">
        <div style={commonStyles}>
          <img
            src={icon}
            alt={`${title} Icon`}
            style={{ width: 28, height: 28, marginRight: '10px' }}
          />
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{title}</span>
        </div>

        <div>
          <div style={commonStyles}>
            <img
              src={require('@site/static/img/logo_file.png').default}
              alt="File Icon"
              style={{ width: 16, height: 16, marginRight: 8 }}
            />
            <a href={getDocPath(title, 'Api-Documentation')} style={{ color: 'var(--ifm-link-color)' }}>
              API Documentation
            </a>
          </div>
          <div style={commonStyles}>
            <img
              src={require('@site/static/img/logo_file.png').default}
              alt="File Icon"
              style={{ width: 16, height: 16, marginRight: 8 }}
            />
            <a href={getDocPath(title, 'Functional-Documentation')} style={{ color: 'var(--ifm-link-color)' }}>
              Functional Documentation
            </a>
          </div>
          <div style={commonStyles}>
            <img
              src={require('@site/static/img/logo_file.png').default}
              alt="File Icon"
              style={{ width: 16, height: 16, marginRight: 8 }}
            />
            <a href={getDocPath(title, 'User-Guide')} style={{ color: 'var(--ifm-link-color)' }}>
              User Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
