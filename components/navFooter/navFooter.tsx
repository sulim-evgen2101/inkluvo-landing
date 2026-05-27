'use client';
import Link from 'next/link';
import React from 'react';
import css from './navFooter.module.css';
import { usePathname } from 'next/navigation';

export default function NavFooter() {
  const pathname = usePathname();
  return (
    <nav className={css.nav}>
      <Link
        className={pathname === '/privacy-policy' ? `${css.navList} ${css.active}` : css.navList}
        href="/privacy-policy"
      >
        Privacy Policy
      </Link>
      <Link
        className={pathname === '/terms-of-use' ? `${css.navList} ${css.active}` : css.navList}
        href="/terms-of-use"
      >
        Terms of Use
      </Link>
      <Link
        className={pathname === '/contacts' ? `${css.navList} ${css.active}` : css.navList}
        href="/contacts"
      >
        Contact us
      </Link>
    </nav>
  );
}
