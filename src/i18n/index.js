import { createI18n } from 'vue-i18n'

const loadMessages = () => {
  const files = import.meta.glob('./languages/*.js', { eager: true })
  const messages = {}

  for (const path in files) {
    const match = path.match(/\/([a-z0-9-_]+)\.js$/i)
    if (match) {
      const locale = match[1]
      messages[locale] = files[path].default
    }
  }

  return messages;
}

const createI18nInstance = () => {
  return createI18n({
    legacy: false,
    locale: 'ua',
    fallbackLocale: 'ua',
    messages: loadMessages(),
  })
}

const i18n = createI18nInstance();

export default i18n;
