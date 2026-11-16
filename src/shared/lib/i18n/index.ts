import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';

export { useTranslation } from 'react-i18next';

// 문구는 번들에 같이 들어 있어 바로(동기) 준비된다. HTML 이스케이프는 React가 한다.
void i18n.use(initReactI18next).init({
  resources: { en: { translation: en } },
  lng: 'en',
  fallbackLng: 'en',
  initAsync: false,
  interpolation: { escapeValue: false },
  returnNull: false,
});

/** 컴포넌트 밖(음성 안내·에러·포맷 함수)에서 쓰는 번역. 화면에선 useTranslation의 t를 쓴다. */
export const t = i18n.t.bind(i18n);
