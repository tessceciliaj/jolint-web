'use client'
import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { RootLayoutProps } from './utils/types';
import Header from './components/Header';
import Footer from './components/Footer';
import {metadata }from './constants'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: RootLayoutProps) {
    const pathname = usePathname()
    
    const pathnameSegments = pathname.split('/').filter(segment => segment);
    const pageTitle = pathnameSegments.length > 0
      ? `${pathnameSegments[0].charAt(0).toUpperCase() + pathnameSegments[0].slice(1)} | ${metadata.title}`
      : `Home | ${metadata.title}`;
    

    
    return (
        <html lang="en">
            <head>
                <title>{pageTitle}</title>
                <meta name="description" content={metadata.d} /> 
            </head>
            <body className={inter.className}>
                {pathname !== '/form' && 
                pathname !== '/form/finish' && (
                    <Header />
                )}
                {children}
                <Footer />
            </body>
        </html>
    );
}