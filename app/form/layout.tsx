'use client'
import React, { useState } from 'react';
import '../globals.css';
import FormHeader from '../components/FormHeader';
import { RootLayoutProps } from '../utils/types';
import { usePathname } from 'next/navigation';
import { Info } from 'lucide-react';
import Link from 'next/link';

export default function Formlayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-[calc(100vh_-_50px)] flex flex-col">
      <FormHeader />
      <main className="flex flex-grow flex-col items-center justify-start mt-[43px] mb-[143px] xl:mx-14 md:mx-10 sm:mx-8 mx-4">
        {pathname !== '/form/finish' && (
          <div className="xl:max-w-[1140px] lg:max-w-[980px] md:max-w-[800px] w-full flex flex-row justify-between">
            <h1 className="font-bold sm:text-4xl text-3xl w-fit">
              Consent Form for Data Processing
            </h1>
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link href="/#how-it-works" target="_blank">
                <div className="relative">
                  <Info className="text-mediumDarkGray"/>
                  {isHovered && (
                    <div className="absolute bg-white border rounded-lg text-xs cursor-pointer border-gray-300 p-2 right-1 top-6.5 shadow-md z-20 w-44">
                      How it works. Click here to read more..
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </div>
        )}
        {children}
      </main>
    </div>
  );
}
