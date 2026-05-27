import LogoComponent from '@/components/logo';
import NavFooter from '@/components/navFooter';
import Image from 'next/image';
import React from 'react';
import css from './footer.module.css';

export default function FooterComponent() {
  return (
    <footer className={css.footer}>
      <div className={css.logo}>
        <LogoComponent />
      </div>
      <div className={css.info}>
        <div className={css.qr}>qr</div>
        <Image src="/google_play.png" alt="google play link" width={270} height={80} />
      </div>
      <div className={css.nav}>
        <NavFooter />
      </div>
    </footer>
  );
}
