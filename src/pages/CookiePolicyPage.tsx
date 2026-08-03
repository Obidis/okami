import React from 'react';
import styles from '../components/sections/PolicyPage.module.scss';
import { useLanguage } from '../contexts/LanguageContext';

const CookiePolicyPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>{t('cookiePolicy.title')}</h1>
        </header>

        <article className={styles.content}>
          <section className={styles.policySection}>
            <h2 className={styles.policySubtitle}>{t('cookiePolicy.whatAreCookies')}</h2>
            <p className={styles.policyText}>{t('cookiePolicy.whatAreCookiesText')}</p>
          </section>

          <section className={styles.policySection}>
            <h2 className={styles.policySubtitle}>{t('cookiePolicy.typesOfCookies')}</h2>
            <div className={styles.cookieTypes}>
              <div className={styles.cookieType}>
                <h3 className={styles.cookieTypeTitle}>{t('cookiePolicy.technical.title')}</h3>
                <p className={styles.cookieTypeDesc}>{t('cookiePolicy.technical.description')}</p>
              </div>
              <div className={styles.cookieType}>
                <h3 className={styles.cookieTypeTitle}>{t('cookiePolicy.analytics.title')}</h3>
                <p className={styles.cookieTypeDesc}>{t('cookiePolicy.analytics.description')}</p>
              </div>
              <div className={styles.cookieType}>
                <h3 className={styles.cookieTypeTitle}>{t('cookiePolicy.advertising.title')}</h3>
                <p className={styles.cookieTypeDesc}>{t('cookiePolicy.advertising.description')}</p>
              </div>
            </div>
          </section>

          <section className={styles.policySection}>
            <h2 className={styles.policySubtitle}>{t('cookiePolicy.cookieDetails')}</h2>
            <div className={styles.tableWrapper}>
              <table className={styles.cookieTable}>
                <thead>
                  <tr>
                    <th>{t('cookiePolicy.table.provider')}</th>
                    <th>{t('cookiePolicy.table.name')}</th>
                    <th>{t('cookiePolicy.table.purpose')}</th>
                    <th>{t('cookiePolicy.table.duration')}</th>
                    <th>{t('cookiePolicy.table.type')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ōkami</td>
                    <td>session_id, cookie_consent</td>
                    <td>{t('cookiePolicy.table.okamiPurpose')}</td>
                    <td>{t('cookiePolicy.table.okamiDuration')}</td>
                    <td>{t('cookiePolicy.table.own')}</td>
                  </tr>
                  <tr>
                    <td>Google Analytics</td>
                    <td>_ga, _gid</td>
                    <td>{t('cookiePolicy.table.analyticsPurpose')}</td>
                    <td>{t('cookiePolicy.table.analyticsDuration')}</td>
                    <td>{t('cookiePolicy.table.thirdParty')}</td>
                  </tr>
                  <tr>
                    <td>Google Ads</td>
                    <td>IDE, NID, gclid</td>
                    <td>{t('cookiePolicy.table.adsPurpose')}</td>
                    <td>{t('cookiePolicy.table.adsDuration')}</td>
                    <td>{t('cookiePolicy.table.thirdParty')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.policySection}>
            <h2 className={styles.policySubtitle}>{t('cookiePolicy.management')}</h2>
            <p className={styles.policyText}>{t('cookiePolicy.managementText')}</p>
            <ul className={styles.browserList}>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">{t('cookiePolicy.browsers.chrome')}</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies" target="_blank" rel="noopener noreferrer">{t('cookiePolicy.browsers.firefox')}</a></li>
              <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">{t('cookiePolicy.browsers.edge')}</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">{t('cookiePolicy.browsers.safari')}</a></li>
            </ul>
            <p className={styles.policyText}>{t('cookiePolicy.gaOptout')}</p>
          </section>
        </article>
      </div>
    </section>
  );
};

export default CookiePolicyPage;