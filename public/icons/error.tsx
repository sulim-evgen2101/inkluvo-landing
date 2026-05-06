export default function ErrorIcon({size}: {size: number}) {
  return (
    <svg width={size} height={size} viewBox='0 0 52 52' fill='none'>
      <circle cx='26' cy='26' r='25' stroke='#ef4444' strokeWidth='2' />
      <path
        d='M16 16L36 36M36 16L16 36'
        stroke='#ef4444'
        strokeWidth='3'
        strokeLinecap='round'
      />
    </svg>
  );
}
