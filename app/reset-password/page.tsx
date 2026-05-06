'use client';
import {Suspense} from 'react';
import ResetPassword from '@/app/reset-password/resetPassword';

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Завантаження...</div>}>
      <ResetPassword />
    </Suspense>
  );
}
