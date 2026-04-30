import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Georgian Edge Inc. | Website Refresh in Progress',
  description: 'Georgian Edge Inc. is refreshing its website for premium property care, landscapes, and cottage support around Georgian Bay.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
