import React from 'react';
import css from './logo.module.css';
import Logo from '@/public/icons/logo';

export default function LogoComponent() {
  return (
    <div className={css.logo}>
      <Logo />
    </div>
  );
}
