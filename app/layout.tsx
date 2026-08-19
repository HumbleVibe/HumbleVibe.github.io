import './styles/globals.css';
import React from 'react';
import Background from '../components/Background'

export const metadata = {
  title: 'John Davis — Engineering High-Impact Web Apps',
  description: 'John Davis — Base44 Certified Partner, full-stack engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteUrl = 'https://johnddev.me';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "John Davis",
    "url": siteUrl,
    "sameAs": [
      "https://github.com/JohnD",
      "https://twitter.com/JohnD"
    ],
    "jobTitle": "Full-stack Engineer",
    "description": metadata.description
  };

  return (
    <html lang="en">
      <head>
        {/* Essential SEO & mobile support */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Full-stack engineer, Base44 partner, web apps, AI systems, John Davis" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={siteUrl + '/'} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={siteUrl + '/'} />
        <meta property="og:site_name" content="John Davis — Engineering High-Impact Web Apps" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0A0D14" />

        {/* JSON-LD structured data to help search engines and AI models understand the site */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <div className="min-h-screen w-full bg-gradient-to-b from-[rgba(10,13,20,1)] to-[rgba(15,23,42,1)] relative">
          <Background />
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
