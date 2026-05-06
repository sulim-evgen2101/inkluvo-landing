import React from 'react';

interface Props {
  width?: string;
  height?: string;
  stroke: string;
}

export default function Eye({width = '21px', height = '14px', stroke}: Props) {
  return (
    <svg width={width} height={height} viewBox='0 0 21 14' fill='none'>
      <path
        d='M8.5 7C8.5 7.53043 8.71071 8.03914 9.08579 8.41421C9.46086 8.78929 9.96957 9 10.5 9C11.0304 9 11.5391 8.78929 11.9142 8.41421C12.2893 8.03914 12.5 7.53043 12.5 7C12.5 6.46957 12.2893 5.96086 11.9142 5.58579C11.5391 5.21071 11.0304 5 10.5 5C9.96957 5 9.46086 5.21071 9.08579 5.58579C8.71071 5.96086 8.5 6.46957 8.5 7Z'
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19.5 7C17.1 11 14.1 13 10.5 13C6.9 13 3.9 11 1.5 7C3.9 3 6.9 1 10.5 1C14.1 1 17.1 3 19.5 7Z'
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
