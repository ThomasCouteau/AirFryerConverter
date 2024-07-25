import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import en from '@/i18n/en';
import fr from '@/i18n/fr';

let lang = null;

if (navigator.language === 'fr-FR') {
  lang = 'fr';
} else {
  lang = 'en';
}

const i18n = createI18n({
  locale: lang,
  fallbackLocale: 'en',
  messages: {
    en,
    fr,
  },
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');
