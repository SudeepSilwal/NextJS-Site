import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import JsonLd from '@/components/json-ld';
import './globals.css';
import Providers from '@/components/providers';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

// Site-wide metadata defaults. Individual pages only need to override
// what's actually different about them (title, description, canonical) —
// everything else (OG/Twitter card shape, robots, metadataBase) is
// inherited from here so it's never missing by accident.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  title: {
    default: `${SITE_NAME} — Personal Portfolio`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  // Wires up the existing favicon set already sitting in /public
  // (generated via a favicon generator — favicon.ico is auto-served by
  // browsers by default, but the rest need to be declared explicitly).
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Personal Portfolio`,
    description: SITE_DESCRIPTION,
    // NOTE: /public/og-image.jpg does not exist yet in the project you've
    // shown me. This path resolves to an absolute URL via metadataBase,
    // but until that file is added, social previews will be broken.
    // See the ChatGPT image-generation prompt provided separately.
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Personal Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Personal Portfolio`,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
};

// Person + WebSite structured data, sitewide.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: 'Developer',
  sameAs: [
    'https://github.com/sudeepsilwal',
    'https://linkedin.com/in/sudeepsilwal',
    'https://x.com/thesudeepsilwal',
    'https://instagram.com/thesudeepsilwal',
    'https://youtube.com/@thesudeepsilwal',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Providers>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}