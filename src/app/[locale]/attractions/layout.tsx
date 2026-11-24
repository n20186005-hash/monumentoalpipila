import Header from '@/components/Header';

export default function AttractionLayout({ children }: { children: React.ReactNode }) {
  return <><Header detail /><div className="pt-16">{children}</div></>;
}
