import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Georgian Edge Inc. website, quote requests, messages, and related online services.',
  alternates: { canonical: '/terms-of-service' },
  robots: { index: false, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <main className="policy wrap">
      <p className="eyebrow">Georgian Edge Inc.</p>
      <h1 className="serif">Terms of Service</h1>
      <p>Last updated: April 28, 2026</p>

      <h2>Overview</h2>
      <p>These terms apply to the Georgian Edge Inc. website, social media pages, quote requests, messages, and related online services.</p>

      <h2>Services</h2>
      <p>Georgian Edge Inc. provides property care, property management, garden cleanups, landscape builds and refreshes, planting, pruning, aerial property photography, and related outdoor services. Information on our website or social media is general and may change without notice.</p>

      <h2>Quotes and availability</h2>
      <p>Submitting a request does not guarantee service availability or final pricing. Quotes, schedules, and project scopes are confirmed directly with Georgian Edge Inc.</p>

      <h2>Customer information</h2>
      <p>When you submit information to us, you agree that we may use it to respond to your inquiry, prepare quotes, schedule work, and provide service-related communication.</p>

      <h2>Photos and project details</h2>
      <p>If you send photos or project details, you confirm that you have the right to share them with us. We will use them for quoting, planning, service delivery, and customer communication. We will ask before using identifiable customer project content for marketing when appropriate.</p>

      <h2>No misuse</h2>
      <p>You agree not to misuse our website, forms, social media pages, or communication channels, including by sending spam, false information, harmful content, or unauthorized access attempts.</p>

      <h2>Limitation of liability</h2>
      <p>To the fullest extent permitted by law, Georgian Edge Inc. is not liable for indirect, incidental, or consequential damages arising from use of our website, social media pages, or online communication tools.</p>

      <h2>Contact</h2>
      <p>Questions about these terms can be sent to <a href="mailto:georgianedgeinc@gmail.com">georgianedgeinc@gmail.com</a>.</p>
    </main>
  );
}
