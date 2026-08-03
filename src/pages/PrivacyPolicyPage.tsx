import React from 'react';
import styles from '../components/sections/PolicyPage.module.scss';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicyPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>{t('privacyPolicy.title')}</h1>
        </header>

        <article className={styles.content}>
          <section className={styles.policySection}>
            <h2 className={styles.policySubtitle}>{t('privacyPolicy.responsible')}</h2>
            <dl className={styles.infoList}>
              <div className={styles.infoItem}>
                <dt>{t('privacyPolicy.company')}</dt>
                <dd>Ōkami</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>{t('privacyPolicy.taxId')}</dt>
                <dd>{t('privacyPolicy.taxIdValue')}</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>{t('privacyPolicy.address')}</dt>
                <dd>{t('privacyPolicy.addressValue')}</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>{t('privacyPolicy.email')}</dt>
                <dd><a href="mailto:jjsantosfernandez@proton.me">jjsantosfernandez@proton.me</a></dd>
              </div>
            </dl>
          </section>

          <section className={styles.policySection}>
            <h2 className={styles.policySubtitle}>{t('privacyPolicy.dataCollected')}</h2>
            <div className={styles.dataTypes}>
              <div className={styles.dataType}>
                <h3 className={styles.dataTypeTitle}>{t('privacyPolicy.contactData')}</h3>
                <p className={styles.dataTypeDesc}>{t('privacyPolicy.contactDataDesc')}</p>
              </div>
              <div className={styles.dataType}>
                <h3 className={styles.dataTypeTitle}>{t('privacyPolicy.navigationData')}</h3>
                <p className={styles.dataTypeDesc}>{t('privacyPolicy.navigationDataDesc')}</p>
              </div>
            </div>
          </section>

          <section className={styles.policySection}>
            <h2 className={styles.policySubtitle}>{t('privacyPolicy.purpose')}</h2>
            <ul className={styles.purposeList}>
              <li>{t('privacyPolicy.purpose1')}</li>
              <li>{t('privacyPolicy.purpose2')}</li>
              <li>{t('privacyPolicy.purpose3')}</li>
            </ul>
          </section>

          <section className={styles.policySection}>
            <h2 className={styles.policySubtitle}>{t('privacyPolicy.legitimacy')}</h2>
            <ul className={styles.purposeList}>
              <li><strong>{t('privacyPolicy.consent')}:</strong> {t('privacyPolicy.consentDesc')}</li>
              <li><strong>{t('privacyPolicy.contract')}:</strong> {t('privacyPolicy.contractDesc')}</li>
            </ul>
          </section>

          <section className={styles.policySection}>
            <h2 className={styles.policySubtitle}>{t('privacyPolicy.retention')}</h2>
            <ul className={styles.purposeList}>
              <li><strong>{t('privacyPolicy.necessaryTime')}:</strong> {t('privacyPolicy.necessaryTimeDesc')}</li>
              <li><strong>{t('privacyPolicy.legalObligation')}:</strong> {t('privacyPolicy.legalObligationDesc')}</li>
            </ul>
          </section>

          <section className={styles.policySection}>
            <h2 className={styles.policySubtitle}>{t('privacyPolicy.recipients')}</h2>
            <p className={styles.policyText}>{t('privacyPolicy.noSale')}</p>
            <p className={styles.policyText}>{t('privacyPolicy.providers')}</p>
          </section>

          <section className={styles.policySection}>
            <h2 className={styles.policySubtitle}>{t('privacyPolicy.rights')}</h2>
            <p className={styles.policyText}>{t('privacyPolicy.rightsIntro')}</p>
            <ul className={styles.rightsList}>
              <li><strong>{t('privacyPolicy.access')}:</strong> {t('privacyPolicy.accessDesc')}</li>
              <li><strong>{t('privacyPolicy.rectification')}:</strong> {t('privacyPolicy.rectificationDesc')}</li>
              <li><strong>{t('privacyPolicy.erasure')}:</strong> {t('privacyPolicy.erasureDesc')}</li>
              <li><strong>{t('privacyPolicy.objection')}:</strong> {t('privacyPolicy.objectionDesc')}</li>
            </ul>
            <p className={styles.policyText}>{t('privacyPolicy.exerciseRights')}</p>
          </section>
        </article>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;