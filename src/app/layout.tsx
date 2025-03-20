import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import './globals.css';
import AppProvider from '@/providers/app';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'CardFolio',
  description: 'Your awesome card collection app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body className={roboto.variable}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
