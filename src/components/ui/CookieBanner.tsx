import React, { useEffect, useState } from 'react';
import styles from './CookieBanner.module.scss';
import { useLanguage } from '../../contexts/LanguageContext';

declare global {
  interface Window {
    'ga-disable-UA-XXXXXXXXX-X'?: boolean;
    'google_ads_disable'?: boolean;
  }
}

const COOKIE_CONSENT_KEY = 'okami_cookie_consent';
const COOKIE_PREFERENCES_KEY = 'okami_cookie_preferences';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  advertising: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  advertising: false,
};

const CookieBanner: React.FC = () => {
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    
    if (!consent) {
      setShowBanner(true);
    } else if (savedPrefs) {
      try {
        setPreferences(JSON.parse(savedPrefs));
      } catch {
        // Use defaults if parsing fails
      }
    }
    
    applyPreferences(savedPrefs ? JSON.parse(savedPrefs) : defaultPreferences);
  }, []);

  const applyPreferences = (prefs: CookiePreferences) => {
    if (!prefs.analytics) {
      // Disable Google Analytics
      window['ga-disable-UA-XXXXXXXXX-X'] = true;
    }
    
    if (!prefs.advertising) {
      // Disable Google Ads tracking
      window['google_ads_disable'] = true;
    }
  };

  const acceptAll = () => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics: true,
      advertising: true,
    };
    saveConsent(prefs);
    setShowBanner(false);
  };

  const rejectAll = () => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics: false,
      advertising: false,
    };
    saveConsent(prefs);
    setShowBanner(false);
  };

  const savePreferences = () => {
    saveConsent(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    applyPreferences(prefs);
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  if (!showBanner && !showSettings) return null;

  return (
    <>
      <div 
        className={`${styles.backdrop} ${showBanner || showSettings ? styles.visible : ''}`}
        onClick={() => { if (!showSettings) setShowBanner(false); }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-banner-title"
      >
        <div 
          className={`${styles.banner} ${showSettings ? styles.expanded : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.bannerContent}>
            {showSettings ? (
              <div className={styles.settingsPanel}>
                <header className={styles.settingsHeader}>
                  <h3 id="cookie-banner-title" className={styles.settingsTitle}>
                    {t('cookieBanner.settingsTitle')}
                  </h3>
                  <button 
                    className={styles.closeButton}
                    onClick={() => setShowSettings(false)}
                    aria-label={t('cookieBanner.close')}
                  >
                    ×
                  </button>
                </header>

                <div className={styles.settingsDescription}>
                  <p>{t('cookieBanner.settingsDescription')}</p>
                </div>

                <div className={styles.cookieToggles}>
                  <label className={styles.toggleLabel}>
                    <div className={styles.toggleInfo}>
                      <span className={styles.toggleName}>{t('cookieBanner.necessary')}</span>
                      <span className={styles.toggleDesc}>{t('cookieBanner.necessaryDesc')}</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className={styles.toggleInput}
                    />
                    <span className={styles.toggleSlider} aria-hidden="true"></span>
                  </label>

                  <label className={styles.toggleLabel}>
                    <div className={styles.toggleInfo}>
                      <span className={styles.toggleName}>{t('cookieBanner.analytics')}</span>
                      <span className={styles.toggleDesc}>{t('cookieBanner.analyticsDesc')}</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                      className={styles.toggleInput}
                    />
                    <span className={styles.toggleSlider} aria-hidden="true"></span>
                  </label>

                  <label className={styles.toggleLabel}>
                    <div className={styles.toggleInfo}>
                      <span className={styles.toggleName}>{t('cookieBanner.advertising')}</span>
                      <span className={styles.toggleDesc}>{t('cookieBanner.advertisingDesc')}</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.advertising}
                      onChange={(e) => setPreferences(prev => ({ ...prev, advertising: e.target.checked }))}
                      className={styles.toggleInput}
                    />
                    <span className={styles.toggleSlider} aria-hidden="true"></span>
                  </label>
                </div>

                <div className={styles.settingsActions}>
                  <button 
                    className={`${styles.button} ${styles.secondary}`}
                    onClick={() => setShowSettings(false)}
                  >
                    {t('cookieBanner.cancel')}
                  </button>
                  <button 
                    className={`${styles.button} ${styles.primary}`}
                    onClick={savePreferences}
                  >
                    {t('cookieBanner.savePreferences')}
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.mainBanner}>
                <div className={styles.bannerText}>
                  <p>{t('cookieBanner.description')}</p>
                </div>
                <div className={styles.bannerActions}>
                  <button 
                    className={`${styles.button} ${styles.secondary}`}
                    onClick={rejectAll}
                  >
                    {t('cookieBanner.reject')}
                  </button>
                  <button 
                    className={`${styles.button} ${styles.ghost}`}
                    onClick={openSettings}
                  >
                    {t('cookieBanner.configure')}
                  </button>
                  <button 
                    className={`${styles.button} ${styles.primary}`}
                    onClick={acceptAll}
                  >
                    {t('cookieBanner.accept')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;