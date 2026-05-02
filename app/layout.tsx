import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Georgian Edge Inc. | Georgian Bay Property Care',
  description: 'Premium property care, landscape refreshes, garden cleanups, planting, pruning, property management, and aerial photography around Georgian Bay.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
