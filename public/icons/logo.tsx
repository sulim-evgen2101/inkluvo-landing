import React from 'react';

type Props = {
  size?: number;
  color?: string;
  accentColor?: string;
  className?: string;
};

export default function Logo({
  size = 170,
  color = '#006DFF',
  accentColor = '#18C94B',
  className,
}: Props) {
  const uniqueId = React.useId();

  const blueGrad = `blueGrad-${uniqueId}`;
  const greenGrad = `greenGrad-${uniqueId}`;
  const textGrad = `textGrad-${uniqueId}`;
  const textShadow = `textShadow-${uniqueId}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 120 170'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <defs>
        <linearGradient id={blueGrad} x1='60' y1='58' x2='60' y2='132'>
          <stop offset='0' stopColor={color} />
          <stop offset='1' stopColor='#3AA8FF' />
        </linearGradient>

        <linearGradient id={greenGrad} x1='20' y1='59' x2='100' y2='104'>
          <stop offset='0' stopColor='#7BEA8B' />
          <stop offset='0.45' stopColor={accentColor} />
          <stop offset='1' stopColor='#12B83E' />
        </linearGradient>

        <linearGradient id={textGrad} x1='16' y1='10' x2='104' y2='36'>
          <stop offset='0' stopColor={color} />
          <stop offset='0.45' stopColor={color} />
          <stop offset='1' stopColor='#3AA8FF' />
        </linearGradient>

        <filter id={textShadow} x='-20%' y='-30%' width='140%' height='160%'>
          <feDropShadow
            dx='0'
            dy='2'
            stdDeviation='1.4'
            floodColor='#006DFF'
            floodOpacity='0.18'
          />
        </filter>
      </defs>

      {/* Inkluvo text as SVG path */}
      <path
        fill={`url(#${textGrad})`}
        filter={`url(#${textShadow})`}
        d='
          M15.8 13.2
          H20.1
          V30
          H15.8
          V13.2
          Z

          M35.6 22.1
          V30
          H31.6
          V23.8
          C31.6 22.5 31.4 21.6 31 21.1
          C30.6 20.6 30 20.3 29.2 20.3
          C28.3 20.3 27.6 20.7 27 21.4
          C26.5 22.1 26.2 23.1 26.2 24.4
          V30
          H22.2
          V17.3
          H26.2
          V19
          C26.7 18.4 27.3 17.9 28.1 17.5
          C28.8 17.2 29.7 17 30.6 17
          C32.2 17 33.4 17.5 34.3 18.4
          C35.2 19.3 35.6 20.5 35.6 22.1
          Z

          M38.6 12.2
          H42.6
          V21.6
          L46.8 17.3
          H51.6
          L46.2 22.7
          L52 30
          H47.1
          L42.6 24.3
          V30
          H38.6
          V12.2
          Z

          M53.8 12.2
          H57.8
          V30
          H53.8
          V12.2
          Z

          M73.7 17.3
          V30
          H69.7
          V28.3
          C69.2 28.9 68.6 29.4 67.8 29.8
          C67.1 30.2 66.2 30.4 65.3 30.4
          C63.7 30.4 62.4 29.9 61.6 29
          C60.7 28.1 60.3 26.9 60.3 25.3
          V17.3
          H64.3
          V23.6
          C64.3 24.9 64.5 25.8 64.9 26.3
          C65.3 26.8 65.9 27.1 66.7 27.1
          C67.6 27.1 68.3 26.7 68.9 26
          C69.4 25.3 69.7 24.3 69.7 23
          V17.3
          H73.7
          Z

          M73.8 15.8
          H79.2
          L83.6 28.8
          L88 15.8
          H93.4
          L86.4 32.6
          H80.8
          L73.8 15.8
          Z

          M98 20.3
          C96.9 20.3 96.1 20.7 95.5 21.5
          C94.9 22.3 94.6 23.2 94.6 24.6
          C94.6 25.9 94.9 26.9 95.5 27.6
          C96.1 28.4 96.9 28.8 98 28.8
          C99.1 28.8 99.9 28.4 100.5 27.6
          C101.1 26.9 101.4 25.9 101.4 24.6
          C101.4 23.2 101.1 22.3 100.5 21.5
          C99.9 20.7 99.1 20.3 98 20.3
          Z

          M98 17
          C100.3 17 102.1 17.7 103.5 19.1
          C104.8 20.4 105.5 22.3 105.5 24.6
          C105.5 26.8 104.8 28.7 103.5 30.1
          C102.1 31.4 100.3 32.1 98 32.1
          C95.7 32.1 93.8 31.4 92.5 30.1
          C91.1 28.7 90.5 26.8 90.5 24.6
          C90.5 22.3 91.1 20.4 92.5 19.1
          C93.8 17.7 95.7 17 98 17
          Z
        '
      />

      {/* icon */}
      <g transform='translate(0 28)'>
        <path
          d='M24 68C21 48 36 29 56 25'
          stroke={`url(#${greenGrad})`}
          strokeWidth={8}
          strokeLinecap='round'
        />

        <path
          d='M64 25C84 29 99 48 96 68'
          stroke={`url(#${greenGrad})`}
          strokeWidth={8}
          strokeLinecap='round'
        />

        <circle cx={60} cy={23} r={6.5} fill={accentColor} />

        <path
          d='
            M28 84
            C24 84 21 82 20 78
            C19 76 20 73 21 71
            L47 31
            C50 26 54 24 60 24
            C66 24 70 26 73 31
            L99 71
            C100 73 101 76 100 78
            C99 82 96 84 92 84
            C89 84 87 82 85 79
            L66 49
            C63 44 57 44 54 49
            L35 79
            C33 82 31 84 28 84
            Z
          '
          fill={`url(#${blueGrad})`}
        />

        {/* green map pin */}
        <path
          d='
            M60 58
            C51.8 58 45.5 64.3 45.5 72.4
            C45.5 82.8 56.5 93.4 60 97.6
            C63.5 93.4 74.5 82.8 74.5 72.4
            C74.5 64.3 68.2 58 60 58
            Z
          '
          fill={accentColor}
        />

        <circle cx={60} cy={72.2} r={5.1} fill='#FFFFFF' />

        <g fill={`url(#${blueGrad})`}>
          <path d='M54 100H65L70 103H57L54 100Z' />
          <path d='M53 106H74C76 106 77 107 76 109L75 111H50L53 106Z' />
          <path d='M43 116H72C74 116 75 117 74 119L73 120H35L43 116Z' />
        </g>
      </g>
    </svg>
  );
}
