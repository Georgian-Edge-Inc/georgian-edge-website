import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Deletion Instructions',
  description: 'How to request deletion of personal information submitted to Georgian Edge Inc. through website, email, Facebook, Instagram, or other channels.',
  alternates: { canonical: '/data-deletion' },
  robots: { index: false, follow: true },
};

export default function DataDeletionPage() {
  return (
    <main className="policy wrap">
      <p className="eyebrow">Georgian Edge Inc.</p>
      <h1 className="serif">Data Deletion Instructions</h1>
      <p>Last updated: April 28, 2026</p>

      <h2>Request deletion</h2>
      <p>If you have contacted Georgian Edge Inc. through our website, Facebook, Instagram, email, or another channel and want your personal information deleted, please email us at <a href="mailto:georgianedgeinc@gmail.com">georgianedgeinc@gmail.com</a>.</p>

      <h2>What to include</h2>
      <p>Please include your name, the email address or phone number used to contact us, and a short note saying you want your personal information deleted.</p>

      <h2>What we will do</h2>
      <p>We will review the request and delete or anonymize personal information we are not required to keep for legal, tax, accounting, safety, dispute, or legitimate business record purposes.</p>

      <h2>Response time</h2>
      <p>We will make reasonable efforts to respond within 30 days.</p>
    </main>
  );
}
