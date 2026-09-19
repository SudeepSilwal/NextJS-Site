import ContactForm from '@/components/contact-form';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import type { Metadata } from 'next';

const PAGE_URL = `${SITE_URL}/contact`;
const PAGE_TITLE = 'Contact';
const PAGE_DESCRIPTION =
  "Get in touch with Sudeep Silwal about a project, collaboration, or opportunity.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
  },
};

export default function Contact() {
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        {/* Was <h2>. Every page needs exactly one <h1> for a correct
            heading hierarchy — the "title" class keeps the same visual
            styling, only the semantic tag changed. */}
        <h1 className="title">Let&apos;s talk about your project</h1>

        <ContactForm />
      </div>
    </section>
  );
}