import Link from 'next/link';
import React from 'react';
import css from './navDesktop.module.css';
import {usePathname} from 'next/navigation';
import Logo from '@/public/icons/logo';

export default function NavDesktop() {
  const pathname = usePathname();
  return (
    <div className={css.header}>
      <Logo />
      <nav className={css.nav}>
        <Link
          className={
            pathname === '/privacy-policy'
              ? `${css.navList} ${css.active}`
              : css.navList
          }
          href='/privacy-policy'
        >
          Політика конфіденційності
        </Link>
        <Link
          className={
            pathname === '/' ? `${css.navList} ${css.active}` : css.navList
          }
          href='/'
        >
          Умови користування
        </Link>
      </nav>
    </div>
  );
}
