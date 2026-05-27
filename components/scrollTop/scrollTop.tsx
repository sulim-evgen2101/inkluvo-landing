'use client';

import React, { useEffect } from 'react';

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export default function ScrollTop() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return null;
}
