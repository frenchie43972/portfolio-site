import { createI18n } from 'vue-i18n'

import aboutEN from './en/about.json'
import commonEN from './en/common.json'
import contactEN from './en/contact.json'
import homeEN from './en/home.json'
import projectsEN from './en/projects.json'
import servicesEN from './en/services.json'

import aboutJA from './ja/about.json'
import commonJA from './ja/common.json'
import contactJA from './ja/contact.json'
import homeJA from './ja/home.json'
import projectsJA from './ja/projects.json'
import servicesJA from './ja/services.json'

// messages object that stores each JSON files' data
const messages = {
  en: {
    about: aboutEN,
    common: commonEN,
    contact: contactEN,
    home: homeEN,
    projects: projectsEN,
    services: servicesEN,
  },
  ja: {
    about: aboutJA,
    common: commonJA,
    contact: contactJA,
    home: homeJA,
    projects: projectsJA,
    services: servicesJA,
  },
}

// Defaults LOCALE for i18n
const DEFAULT_LOCALE = 'en'
// In case there is an error in the JA files
const FALLBACK_LOCALE = 'en'

// Creteas and exports the i18n instance
export const i18n = createI18n({
  globalInjection: true,
  locale: DEFAULT_LOCALE,
  fallbackLocale: FALLBACK_LOCALE,
  messages,
})

export const setHtmlLang = (locale) => {
  if (!locale) return

  document.documentElement.setAttribute('lang', locale)
}
