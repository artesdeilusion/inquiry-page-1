import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const _inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: 'aydeed.com - Premium Domain For Sale | Buy This Domain',
  description: 'aydeed.com is a premium domain name available for purchase. Short, memorable, and brandable - perfect for tech startups, SaaS products, or digital ventures. Contact us to acquire this domain today.',
  keywords: ['aydeed', 'aydeed.com', 'domain for sale', 'buy domain', 'premium domain', 'brandable domain', 'startup domain', 'tech domain', 'domain acquisition'],
  generator: 'v0.app',
  authors: [{ name: 'Aydeed Domain' }],
  creator: 'Aydeed',
  publisher: 'Aydeed',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aydeed.com',
    siteName: 'aydeed.com',
    title: 'aydeed.com - Premium Domain For Sale',
    description: 'aydeed.com is a premium domain name available for purchase. Short, memorable, and brandable - perfect for tech startups, SaaS products, or digital ventures.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aydeed.com - Premium Domain For Sale',
    description: 'aydeed.com is a premium domain name available for purchase. Short, memorable, and brandable.',
  },
  alternates: {
    canonical: 'https://aydeed.com',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  other: {
    'domain-status': 'for-sale',
    'domain-name': 'aydeed.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_playfair.variable} ${_inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
