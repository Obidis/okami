import React from 'react';
import styles from '../components/sections/PolicyPage.module.scss';
import { useLanguage } from '../contexts/LanguageContext';

const LegalNoticePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>{t('legalNotice.title')}</h1>
        </header>

        <article className={styles.content}>
          <section className={styles.policySection}>
            <h2 className={styles.policySubtitle}>{t('legalNotice.identification.title')}</h2>
            <dl className={styles.infoList}>
              <div className={styles.infoItem}>
                <dt>{t('legalNotice.identification.owner')}</dt>
                <dd>Ōkami</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>{t('legalNotice.identification.taxId')}</dt>
                <dd>{t('legalNotice.identification.taxIdValue')}</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>{t('legalNotice.identification.address')}</dt>
                <dd>{t('legalNotice.identification.addressValue')}</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>{t('legalNotice.identification.email')}</dt>
                <dd><a href="mailto:jjsantosfernandez@proton.me">jjsantosfernandez@proton.me</a></dd>
              </div>
              <div className={styles.infoItem}>
                <dt>{t('legalNotice.identification.phone')}</dt>
                <dd>{t('legalNotice.identification.phoneValue')}</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>{t('legalNotice.identification.registry')}</dt>
                <dd>{t('legalNotice.identification.registryValue')}</dd>
              </div>
            </dl>
          </section>

          <section className={styles.policySection}>
            <h2 className={styles.policySubtitle}>{t('legalNotice.users.title')}</h2>
            <p className={styles.policyText}>{t('legalNotice.users.text1')}</p>
            <p className={styles.policyText}>{t('legalNotice.users.text2')}</p>
            <p className={styles.policyText}>{t('legalNotice.users.text3')}</p>
          </section>

          <section className={styles.policySection}>
            <h2 className={styles.policySubtitle}>{t('legalNotice.ip.title')}</h2>
            <p className={styles.policyText}>{t('legalNotice.ip.text1')}</p>
            <p className={styles.policyText}>{t('legalNotice.ip.text2')}</p>
          </section>

          <section className={styles.policySection}>
            <h2 className={styles.policySubtitle}>{t('legalNotice.liability.title')}</h2>
            <p className={styles.policyText}>{t('legalNotice.liability.text')}</p>
          </section>

          <section className={styles.policySection}>
            <h2 className={styles.policySubtitle}>{t('legalNotice.modifications.title')}</h2>
            <p className={styles.policyText}>{t('legalNotice.modifications.text1')}</p>
            <p className={styles.policyText}>{t('legalNotice.modifications.text2')}</p>
          </section>

          <section className={styles.policySection}>
            <h2 className={styles.policySubtitle}>{t('legalNotice.exclusion.title')}</h2>
            <p className={styles.policyText}>{t('legalNotice.exclusion.text')}</p>
          </section>

          <section className={styles.policySection}>
            <h2 className={styles.policySubtitle}>{t('legalNotice.jurisdiction.title')}</h2>
            <p className={styles.policyText}>{t('legalNotice.jurisdiction.text')}</p>
          </section>
        </article>
      </div>
    </section>
  );
};

export default LegalNoticePage;