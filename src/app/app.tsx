import { useTranslation } from '@/shared/lib/i18n';

export function App() {
  const { t } = useTranslation();
  return (
    <main className="flex min-h-dvh items-center justify-center">
      <h1 className="text-2xl font-semibold">{t('app.title')}</h1>
    </main>
  );
}
