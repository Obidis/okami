import { getAssetUrl } from '../utils/assetHelper';
import type { Translations } from '../types';

export const en: Translations = {
  nav: { home: 'Home', services: 'Services', about: 'About Us', contact: 'Contact' },
  hero: {
    title: 'Ōkami',
    subtitle: 'Visibility for local businesses on the web',
    highlights: ['Professional Website', 'Google Business Profile', 'SEO Positioning', 'Domain & Hosting', '5 Email Accounts', 'Maintenance'],
    cta: 'Request Consultation'
  },
  services: {
    title: 'Our Services',
    subtitle: 'Comprehensive solutions for your digital business',
    items: [
      { title: 'Professional Website', description: 'We create a website designed to explain what you do with clarity, convey trust, and turn visits into new business opportunities.', icon: 'web', image: getAssetUrl('/images/services/diseno-web.webp'), alt: 'Professional responsive web design shown on laptop and mobile' },
      { title: 'Google Business Profile', description: 'We set up and optimize your Business Profile so your business appears in Google and Google Maps when customers search for services in your area.', icon: 'map', image: getAssetUrl('/images/services/ficha-google.webp'), alt: 'Google Maps business profile on mobile device' },
      { title: 'SEO Positioning', description: 'We work on an evolving SEO ecosystem: we analyze the expressions and keywords your customers use to find you, optimize your content, and strengthen your presence so Google better understands your business and shows you in relevant searches.', icon: 'search', image: getAssetUrl('/images/services/seo.webp'), alt: 'Organic traffic growth chart and SEO positioning graph' },
      { title: 'Domain & Hosting', description: 'Your business has its own domain and a secure, fast, always-available environment. We handle the technical aspects so you can focus on your activity.', icon: 'server', image: getAssetUrl('/images/services/dominio-hosting.webp'), alt: 'Cloud server and SSL certificate for secure hosting' },
      { title: '5 Email Accounts', description: 'Includes up to 5 corporate email accounts associated with your domain to reinforce a more professional, consistent, and trustworthy image to your customers.', icon: 'mail', image: getAssetUrl('/images/services/correo.webp'), alt: 'Corporate email inbox on desktop' },
      { title: 'Maintenance', description: 'Includes technical support and ongoing maintenance so you can request updates, improvements, and punctual changes when you need them.', icon: 'settings', image: getAssetUrl('/images/services/mantenimiento.webp'), alt: 'Maintenance dashboard and web updates panel' }
    ]
  },
  features: {
    title: 'Why Choose Us?',
    subtitle: '',
    items: [
      { title: 'Mobile-First Approach', description: 'We design thinking first about mobile devices, where most of your customers search for you.', image: getAssetUrl('/images/services/Mobile-first.webp'), alt: 'Mobile-first responsive design on smartphone and tablet' },
      { title: 'Advanced SEO', description: 'We optimize every technical and content aspect to maximize your visibility in search engines.', image: getAssetUrl('/images/services/seo-avanzado.webp'), alt: 'Keyword chart and technical SEO analysis graph' },
      { title: 'Personalized Support', description: 'Ongoing accompaniment from launch to continuous growth of your digital presence.', image: getAssetUrl('/images/services/Soporte-Personalizado.webp'), alt: 'Technical support team assisting client' }
    ]
  },
  about: {
    title: 'Why Ōkami?',
    subtitle: 'Because we\'re by your side to help you achieve your goals.',
    description: [
      'At Ōkami we specialize in Web Design and Development, and we\'re also an independent Digital Marketing Agency.',
      'We\'re committed to accompanying and assisting entrepreneurs and businesses, so they achieve results that lead them to a renowned market position, selling more and growing their Brands.',
      'The scale and scope of any project can sometimes seem overwhelming, but if you accept our proposal, we\'ll face any challenge together.'
    ],
    workflow: {
      title: 'Work Flow',
      subtitle: 'Our work process',
      steps: [
        { title: 'Research', description: 'We gather and leverage all published information about your industry and product/service to identify potential differentiators and competitive advantages.' },
        { title: 'Planning', description: 'We design a tailored strategy based on your business goals and detected opportunities.' },
        { title: 'Development', description: 'We execute the plan with technical precision, creating robust, scalable, results-oriented web solutions.' },
        { title: 'Results', description: 'We measure, analyze, and continuously optimize to maximize your return on investment.' }
      ]
    }
  },
  contact: {
    title: 'Contact Us', subtitle: 'Ready to take your business to the next level?', email: 'Email', phone: 'Contact Phone', description: 'How we can help you', submit: 'Send Inquiry', submitError: 'Error sending message. Please try again.', placeholder: { email: 'example@yourcompany.com', phone: '+1 555 000 000', description: 'Tell us about your project or inquiry...' }
  },
  cookiePolicy: {
    title: 'Cookie Policy — Ōkami', whatAreCookies: '1. What are cookies?', whatAreCookiesText: 'A cookie is a small text file downloaded to your device when accessing certain web pages. It allows a website, among other things, to store and retrieve information about a user\'s browsing habits or their device.', typesOfCookies: '2. What types of cookies does this website use?', technical: { title: 'Technical cookies (first-party)', description: 'Necessary for the website to function correctly, manage navigation, and remember policy acceptance.' }, analytics: { title: 'Analytics cookies (third-party - Google Analytics)', description: 'Allow us to quantify the number of users and perform statistical measurement and analysis of website usage to improve our products or services.' }, advertising: { title: 'Behavioral advertising cookies (third-party - Google Ads)', description: 'Store information about user behavior through continuous observation of browsing habits, allowing a specific profile to be developed for displaying personalized advertising on the Google network.' }, cookieDetails: '3. Detail of cookies used', table: { provider: 'Provider', name: 'Name', purpose: 'Purpose', duration: 'Duration', type: 'Type', okamiPurpose: 'Maintain user session and record cookie preference.', okamiDuration: 'Session / 1 year', analyticsPurpose: 'Identify unique users to generate aggregated traffic statistics.', analyticsDuration: '2 years / 24 hours', adsPurpose: 'Track ad conversions, measure campaign effectiveness, and display personalized ads on the Google network.', adsDuration: 'Variable (up to 6 months / 2 years)' }, management: '4. Cookie management and deactivation', managementText: 'You can allow, block, or delete cookies installed on your device through your browser settings. If you block technical cookies, some sections of the Ōkami website may not function correctly.', browsers: { chrome: 'Configure cookies in Google Chrome', firefox: 'Configure cookies in Mozilla Firefox', edge: 'Configure cookies in Microsoft Edge', safari: 'Configure cookies in Safari (Apple)' }, gaOptout: 'You can also specifically disable Google Analytics tracking via the Google Analytics Opt-out Browser Add-on.'
  },
  cookieBanner: {
    description: 'At Ōkami we use first-party, analytics (Google Analytics), and advertising (Google Ads) cookies to optimize website functionality, analyze your browsing, and show you ads based on your interests. You can accept all cookies by clicking \'Accept\', configure your preferences in \'Configure\', or reject their use by clicking \'Reject\'.',
    accept: 'Accept', reject: 'Reject', configure: 'Configure', settingsTitle: 'Cookie Settings', settingsDescription: 'You can configure which types of cookies you want to accept. Technical cookies are necessary for basic site functionality and cannot be disabled.',
    necessary: 'Technical cookies', necessaryDesc: 'Required for site operation, session management, and preferences.',
    analytics: 'Analytics cookies', analyticsDesc: 'Help us understand how you interact with the website (Google Analytics).',
    advertising: 'Advertising cookies', advertisingDesc: 'Allow personalized ads based on your browsing (Google Ads).',
    savePreferences: 'Save preferences', cancel: 'Cancel', close: 'Close'
  },
  privacyPolicy: {
    title: 'Privacy Policy — Ōkami', responsible: '1. Data Controller', company: 'Company', taxId: 'Tax ID', taxIdValue: 'Pending registration', address: 'Address', addressValue: 'Pending registration', email: 'Email',
    dataCollected: '2. Personal Data We Collect', contactData: 'Contact Data', contactDataDesc: 'Name, surname, email address, and phone number.', navigationData: 'Navigation Data', navigationDataDesc: 'IP address, device type, and cookies (see our Cookie Policy).',
    purpose: '3. Purpose of Processing', purpose1: 'Respond to inquiries: Handle messages sent through the contact form.', purpose2: 'Manage services: Send quotes or provide contracted services.', purpose3: 'Send newsletters: Send commercial emails only if you have checked the acceptance box.',
    legitimacy: '4. Legal Basis for Processing', consent: 'Your written consent', consentDesc: 'By checking the boxes before submitting your data.', contract: 'Contract execution', contractDesc: 'When you hire us for a service or purchase a product.',
    retention: '5. Data Retention Period', necessaryTime: 'Necessary time', necessaryTimeDesc: 'We keep your data only for as long as the business relationship lasts or to respond to your inquiry.', legalObligation: 'Legal obligation', legalObligationDesc: 'We retain certain data to comply with mandatory tax laws.',
    recipients: '6. Data Recipients', noSale: 'We do not sell data: We never share your personal data with third parties for commercial purposes.', providers: 'Technical providers: Only companies providing us technical services (like web hosting) have access, under strict confidentiality agreements.',
    rights: '7. Your Rights (ARCO Rights)', rightsIntro: 'You have the right to control your personal data. You can request at any time:', access: 'Access', accessDesc: 'Know what data we have about you.', rectification: 'Rectification', rectificationDesc: 'Correct data if it is inaccurate.', erasure: 'Erasure', erasureDesc: 'Delete your data from our system.', objection: 'Objection', objectionDesc: 'Request that we stop using your data for a specific purpose.', exerciseRights: 'To exercise these rights, email jjsantosfernandez@proton.me attaching a copy of your ID document.'
  },
  serviceDetails: { features: 'Features', related: 'Related Services' },
  footer: { copyright: '© {year} Ōkami.Ltd. All rights reserved.', links: { title: 'Quick Links', home: 'Home', about: 'About Us', services: 'Services', contact: 'Contact' }, legal: { title: 'Legal', cookies: 'Cookie Policy', privacy: 'Privacy Policy', terms: 'Legal Notice' }, social: { title: 'Follow Us', github: 'GitHub', discord: 'Discord', linkedin: 'LinkedIn' } },
  legalNotice: {
    title: 'Legal Notice — Ōkami', identification: { title: '1. Identifying Information', owner: 'Owner', taxId: 'Tax ID', taxIdValue: 'Pending registration', address: 'Registered Address', addressValue: 'Pending registration', email: 'Email', phone: 'Phone', phoneValue: 'Pending registration', registry: 'Registry Data', registryValue: 'Self-employed / Pending registry registration' },
    users: { title: '2. Users and Terms of Use', text1: 'Access to and/or use of this Ōkami portal grants the status of USER. By browsing this website, you fully accept the conditions reflected herein.', text2: 'The website provides access to a multitude of information, services, or data on the Internet belonging to Ōkami. The USER assumes responsibility for the use of the portal.', text3: 'Such responsibility extends to any registration required to access certain services or content.' },
    ip: { title: '3. Intellectual and Industrial Property', text1: 'Ōkami, either directly or as assignee, holds all intellectual and industrial property rights to its website, as well as the elements contained therein (including but not limited to: images, sound, audio, video, software or texts; trademarks or logos, color combinations, structure and design, etc.).', text2: 'All rights reserved. Reproduction, distribution, and public communication, including making available, of all or part of the contents of this website for commercial purposes, in any medium and by any technical means, is expressly prohibited without the express written authorization of Ōkami.' },
    liability: { title: '4. Disclaimer of Liability', text: 'Ōkami shall not be liable, under any circumstances, for damages of any nature that may arise, including but not limited to: errors or omissions in the contents, lack of availability of the portal, or the transmission of viruses or malicious or harmful programs in the contents, despite having adopted all necessary technological measures to prevent this.' },
    modifications: { title: '5. Modifications and Links', text1: 'Ōkami reserves the right to make, without prior notice, any modifications it deems appropriate to its portal, being able to change, delete, or add both the content and services provided through it and the way in which they appear presented or located on its portal.', text2: 'In the event that the website contains links or hyperlinks to other Internet sites, Ōkami shall exercise no control over such sites and contents. In no case shall it assume any responsibility for the contents of any link belonging to a third-party website.' },
    exclusion: { title: '6. Right of Exclusion', text: 'Ōkami reserves the right to deny or withdraw access to the portal and/or the services offered without prior notice, at its own request or that of a third party, to those users who breach these General Terms of Use.' },
    jurisdiction: { title: '7. Applicable Law and Jurisdiction', text: 'The relationship between Ōkami and the USER shall be governed by current Spanish law. Any dispute shall be submitted to the Courts and Tribunals of the city of Madrid, unless the law provides otherwise by consumer and user protection regulations.' }
  }
};
