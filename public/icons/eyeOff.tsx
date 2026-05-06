interface Props {
  width?: string;
  height?: string;
  stroke: string;
}

export default function EyeOff({
  width = '21px',
  height = '20px',
  stroke,
}: Props) {
  return (
    <svg width={width} height={height} viewBox='0 0 21 20' fill='none'>
      <path
        d='M9.08457 8.58789C8.70956 8.96304 8.49893 9.4718 8.49902 10.0022C8.49912 10.5327 8.70993 11.0414 9.08507 11.4164C9.46022 11.7914 9.96898 12.002 10.4994 12.0019C11.0299 12.0018 11.5386 11.791 11.9136 11.4159'
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.181 14.673C13.7786 15.5515 12.1548 16.0119 10.5 16C6.9 16 3.9 14 1.5 10C2.772 7.88 4.212 6.322 5.82 5.326M8.68 4.18C9.27898 4.05836 9.8888 3.99804 10.5 4C14.1 4 17.1 6 19.5 10C18.8333 11.11 18.1207 12.0667 17.362 12.87M1.5 1L19.5 19'
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
