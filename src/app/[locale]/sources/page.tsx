import { getTranslations, setRequestLocale } from 'next-intl/server';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SourcesSection from '@/components/SourcesSection';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'sources' });
  return {
    title: t('title'),
    alternates: {
      canonical: `/${locale}/sources`,
      languages: { en: '/en/sources', es: '/es/sources', zh: '/zh/sources', 'x-default': '/en/sources' },
    },
  };
}

export default async function SourcesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <><Header detail /><main className="pt-16"><SourcesSection /></main><Footer /></>;
}
