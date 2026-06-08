import React from 'react';
import Link from 'next/link';
import css from './navMobile.module.css';
import {usePathname} from 'next/navigation';
import {Routes} from '@/types/routes';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavMobile({isOpen, setIsOpen}: Props) {
  const pathname = usePathname();
  const toggleOpenModal = () => {
    setIsOpen((prev) => !prev);
  };
  const nav = isOpen ? css.nav : `${css.nav} ${css.visibilityHidden}`;
  return (
    <nav className={nav}>
      <Link
        onClick={toggleOpenModal}
        className={
          pathname === '/' ? `${css.navList} ${css.active}` : css.navList
        }
        href='/'
      >
        Головна
      </Link>
      <Link
        onClick={toggleOpenModal}
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
        onClick={toggleOpenModal}
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
  );
}
