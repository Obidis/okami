import React from 'react';
import styles from './ModalContact.module.scss';
import { useLanguage } from '../../contexts/LanguageContext';
import { useModal } from '../../contexts/ModalContext';

const ModalContact: React.FC = () => {
  const { t } = useLanguage();
  const { isOpen, onClose } = useModal();
  const [formState, setFormState] = React.useState({
    email: '',
    phone: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formState.email || !formState.phone || !formState.description) {
      alert('Please fill in all fields');
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch(e.currentTarget.action, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setShowSuccess(true);
        setFormState({ email: '', phone: '', description: '' });
        setTimeout(() => { onClose(); setShowSuccess(false); }, 1500);
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setSubmitError(t('contact.submitError') || 'Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{t('contact.title')}</h2>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        {showSuccess ? (
          <div className={styles.successMessage}>
            <p className={styles.successMessageText}>{t('contact.submit')} ✓</p>
          </div>
        ) : (
          <form 
            className={styles.modalBody} 
            onSubmit={handleSubmit}
            action="https://formsubmit.co/jjsantosfernandez@proton.me"
            method="POST"
          >
            <input type="hidden" name="_next" value="" />
            <input type="hidden" name="_subject" value={t('contact.submit')} />
            <input type="hidden" name="_captcha" value="false" />
            {submitError && <p className={styles.errorMessage}>{submitError}</p>}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder={t('contact.placeholder.email')}
                required
                disabled={isSubmitting}
                className={`${styles.input} ${isSubmitting && styles.disabled}`}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                {t('contact.phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder={t('contact.placeholder.phone')}
                required
                disabled={isSubmitting}
                className={`${styles.input} ${isSubmitting && styles.disabled}`}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="description" className={styles.label}>
                {t('contact.description')}
              </label>
              <textarea
                id="description"
                name="description"
                value={formState.description}
                onChange={handleChange}
                placeholder={t('contact.placeholder.description')}
                required
                disabled={isSubmitting}
                rows={4}
                className={`${styles.textarea} ${isSubmitting && styles.disabled}`}
              />
            </div>
            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? t('contact.submit') + '...' : t('contact.submit')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ModalContact;
