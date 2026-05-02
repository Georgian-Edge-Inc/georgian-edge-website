import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Georgian Edge Inc. website, social media, quote requests, messages, and related business tools.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="policy wrap">
      <p className="eyebrow">Georgian Edge Inc.</p>
      <h1 className="serif">Privacy Policy</h1>
      <p>Last updated: April 28, 2026</p>

      <h2>Overview</h2>
      <p>Georgian Edge Inc. respects your privacy. This policy explains how we handle basic information submitted through our website, social media pages, quote requests, messages, and related business tools.</p>

      <h2>Information we may collect</h2>
      <p>We may collect information you choose to provide, such as your name, phone number, email address, property address, project details, photos, and messages related to a quote request or service inquiry.</p>

      <h2>How we use information</h2>
      <p>We use this information to respond to inquiries, prepare quotes, schedule work, manage customer relationships, provide services, and maintain business records.</p>

      <h2>Facebook and Instagram</h2>
      <p>If you contact Georgian Edge Inc. through Facebook, Instagram, or Meta services, we may receive the information you choose to share through those platforms. We use it only to respond to your message, manage leads, or provide service-related communication.</p>

      <h2>Sharing information</h2>
      <p>We do not sell personal information. We may share limited information only when needed to provide services, operate business systems, comply with law, or protect our business and customers.</p>

      <h2>Data retention</h2>
      <p>We keep business and customer information only as long as reasonably needed for service, records, legal, tax, or operational purposes.</p>

      <h2>Contact</h2>
      <p>To ask about privacy or request deletion of information, contact Georgian Edge Inc. at <a href="mailto:georgianedgeinc@gmail.com">georgianedgeinc@gmail.com</a>.</p>
    </main>
  );
}
