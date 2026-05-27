import React from 'react';
import Link from 'next/link';
import css from './navMobile.module.css';
import {usePathname} from 'next/navigation';

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
          pathname === '/privacy-policy'
            ? `${css.navList} ${css.active}`
            : css.navList
        }
        href='/privacy-policy'
      >
        Політика конфіденційності
      </Link>
      <Link
        onClick={toggleOpenModal}
        className={
          pathname === '/' ? `${css.navList} ${css.active}` : css.navList
        }
        href='/'
      >
        Умови користування
      </Link>
    </nav>
  );
}
