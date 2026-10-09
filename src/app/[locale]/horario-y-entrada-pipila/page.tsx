import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import TopicPage from '@/components/TopicPage';

const baseUrl = 'https://www.monumentoalpipila.com';
const path = 'horario-y-entrada-pipila';
const namespace = 'pipilaHoursTickets';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace });
  const zhUrl = `${baseUrl}/zh/${path}`;
  const enUrl = `${baseUrl}/en/${path}`;
  const esUrl = `${baseUrl}/es/${path}`;
  const selfUrl = locale === 'zh' ? zhUrl : locale === 'en' ? enUrl : esUrl;

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: selfUrl,
      languages: {
        en: enUrl,
        es: esUrl,
        zh: zhUrl,
        'x-default': enUrl,
      },
    },
  };
}

export default async function PipilaHoursTicketsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TopicPage namespace={namespace} />;
}
