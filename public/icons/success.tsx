export default function CheckIcon({size}: {size: number}) {
  return (
    <svg width={size} height={size} viewBox='0 0 52 52' fill='none'>
      <circle cx='26' cy='26' r='25' stroke='#22c55e' strokeWidth='2' />
      <path
        d='M14 27L22 35L38 19'
        stroke='#22c55e'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
