import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PerformanceMonitor from '@/components/PerformanceMonitor'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - Transform Your Brand with AI Intelligence',
  description: 'ADmyBRAND AI Suite leverages cutting-edge artificial intelligence to optimize your marketing campaigns, enhance brand visibility, and drive unprecedented growth for your business.',
  keywords: 'AI marketing, brand management, marketing automation, artificial intelligence, business growth, digital marketing',
  authors: [{ name: 'ADmyBRAND Team' }],
  creator: 'ADmyBRAND',
  publisher: 'ADmyBRAND',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://admybrand.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ADmyBRAND AI Suite - Transform Your Brand with AI Intelligence',
    description: 'Leverage cutting-edge AI to optimize your marketing campaigns and drive unprecedented business growth.',
    url: 'https://admybrand.ai',
    siteName: 'ADmyBRAND AI Suite',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ADmyBRAND AI Suite - AI-Powered Brand Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND AI Suite - Transform Your Brand with AI Intelligence',
    description: 'Leverage cutting-edge AI to optimize your marketing campaigns and drive unprecedented business growth.',
    images: ['/og-image.jpg'],
    creator: '@admybrand',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'theme-color': '#3B82F6',
    'msapplication-TileColor': '#3B82F6',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'ADmyBRAND',
    'application-name': 'ADmyBRAND AI Suite',
    'mobile-web-app-capable': 'yes',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//via.placeholder.com" />
        
        {/* Inline script for dark mode to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <PerformanceMonitor />
      </body>
    </html>
  )
} 