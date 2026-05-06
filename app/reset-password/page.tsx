'use client';
import {Suspense} from 'react';
import ResetPassword from '@/app/reset-password/resetPassword';

type State = {
  success: boolean;
  error: string | null;
};

async function reducerAction(prevState: State, formData: FormData) {
  return (
    <Suspense fallback={<div>Завантаження...</div>}>
      <ResetPassword />
    </Suspense>
  );
}
