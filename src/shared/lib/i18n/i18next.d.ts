import type { en } from './locales/en';
import 'i18next';

// t('app.title')처럼 키를 타입으로 확인한다(영어 문구 객체가 기준).
declare module 'i18next' {
  // 라이브러리 타입을 확장(병합)하려면 interface여야 한다.
  // eslint-disable-next-line ts/consistent-type-definitions
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: { translation: typeof en };
    returnNull: false;
  }
}
