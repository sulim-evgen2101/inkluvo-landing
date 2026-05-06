'use client';
import {useActionState, useState} from 'react';
import css from './styles.module.css';
import Eye from '@/public/icons/eye';
import EyeOff from '@/public/icons/eyeOff';
import {useSearchParams} from 'next/navigation';
import CheckIcon from '@/public/icons/success';
import {BounceLoader} from 'react-spinners';
import ErrorIcon from '@/public/icons/error';
import axios from 'axios';

type State = {
  success: boolean;
  error: string | null;
};

async function reducerAction(prevState: State, formData: FormData) {
  const password = formData.get('password');
  const token = formData.get('token');

  try {
    await axios.post(
      `http://localhost:4000/users/reset-password/?token=${token}`,
      {password}
    );
    return {success: true, error: null};
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        error: error.response?.data?.message || 'Помилка',
      };
    }
    return {success: false, error: 'Невідома помилка'};
  }
}

const initialState: State = {
  success: false,
  error: null,
};

export default function ResetPassword() {
  const [state, formAction, isPending] = useActionState(
    reducerAction,
    initialState
  );
  const searchParams = useSearchParams();

  const token = searchParams.get('token') ?? '';
  const [isPassword, setIsPassword] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  const handleChange = (e: any) => {
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else {
      setPasswordConf(e.target.value);
    }
  };

  return (
    <div>
      <form action={formAction} className={css.form}>
        <input
          type='hidden'
          name='token'
          defaultValue={token}
          className={css.input}
        />
        <label>
          Пароль
          <div className={css.box}>
            <input
              type={isPassword ? 'password' : 'text'}
              name='password'
              value={password}
              onChange={handleChange}
              className={css.input}
            />
            <button
              type='button'
              onClick={() => setIsPassword((prev) => !prev)}
              className={css.eye}
            >
              {isPassword ? <Eye stroke='green' /> : <EyeOff stroke='green' />}
            </button>
          </div>
        </label>
        <label>
          Підтвердити пароль
          <div className={css.box}>
            <input
              type={isPassword ? 'password' : 'text'}
              name='password_confirmed'
              value={passwordConf}
              onChange={handleChange}
              className={css.input}
            />
            <button
              type='button'
              onClick={() => setIsPassword((prev) => !prev)}
              className={css.eye}
            >
              {isPassword ? <Eye stroke='green' /> : <EyeOff stroke='green' />}
            </button>
          </div>
        </label>
        <button
          disabled={isPending || passwordConf !== password}
          className={css.send}
        >
          Змінити пароль
          {state.success && !isPending && (
            <p className={css.check}>
              <CheckIcon size={20} />
            </p>
          )}
          {!state.success && !isPending && (
            <p className={css.check}>
              <ErrorIcon size={20} />
            </p>
          )}
          {isPending && (
            <p className={css.check}>
              <BounceLoader size={20} color='#80ac9f' />
            </p>
          )}
        </button>
        <p className={css.error}>{state.error}</p>
      </form>
    </div>
  );
}
