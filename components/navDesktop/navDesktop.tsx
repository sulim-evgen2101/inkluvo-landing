import Link from 'next/link';
import React from 'react';
import css from './navDesktop.module.css';
import {usePathname} from 'next/navigation';
import Logo from '@/public/icons/logo';
import {Routes} from '@/types/routes';

export default function NavDesktop() {
  const pathname = usePathname();
  return (
    <div className={css.header}>
      <Logo />
      <nav className={css.nav}>
        <Link
          className={
            pathname === `/` ? `${css.navList} ${css.active}` : css.navList
          }
          href='/'
        >
          Головна
        </Link>
        <Link
          className={
            pathname === `/${Routes.PRIVACY_POLICY}`
              ? `${css.navList} ${css.active}`
              : css.navList
          }
          href={`/${Routes.PRIVACY_POLICY}`}
        >
          Політика конфіденційності
        </Link>
        <Link
          className={
            pathname === `/${Routes.TERM_OF_USE}`
              ? `${css.navList} ${css.active}`
              : css.navList
          }
          href={`/${Routes.TERM_OF_USE}`}
        >
          Умови користування
        </Link>
      </nav>
    </div>
  );
}
