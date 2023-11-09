'use client'
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar'
import Logo from '../../public/JOLINTlogo.svg'
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 50);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div
        className={`flex justify-between items-center mb:p-8 px-6 mb:min-h-[110px] mb:max-h-[110px] h-[80px] bg-lightColor mb:border-b-2 border-mediumGray mb:relative sticky top-0 z-50 ${
          isScrolled ? 'shadow-lg shadow-gray-500/10 border-b-0' : ''
        }`}
      >
        <Link href="/">
          <Image src={Logo} alt="Logo" width={120} height={50} />
        </Link>
        <div className="flex justify-center items-center gap-6">
          <NavBar />
        </div>
      </div>
    );
  };
  
  export default Header;
