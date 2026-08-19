import './styles/globals.css';
import React from 'react';
import Background from '../components/Background'

export const metadata = {
  title: 'John Davis — Engineering High-Impact Web Apps',
  description: 'John Davis — Base44 Certified Partner, full-stack engineer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
