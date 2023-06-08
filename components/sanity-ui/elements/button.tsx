import clsx from 'clsx';
import type { ButtonHTMLAttributes, ElementType } from 'react';

import Link, { LinkProps } from 'next/link';

type ButtonMode = 'default' | 'outline';
type ButtonTone = 'critical' | 'default' | 'shopPay';

type LinkPropsOptional = Omit<LinkProps, 'href'> & {
  to?: LinkProps['href'];
};

type Props = {
  as?: ElementType;
  className?: string;
  mode?: ButtonMode;
  onClick?: () => void;
  to?: string;
  tone?: ButtonTone;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  LinkPropsOptional;

type ButtonStyleOptions = {
  mode?: ButtonMode;
  tone?: ButtonTone;
};

export const defaultButtonStyles = (options?: ButtonStyleOptions) => {
  const mode: ButtonMode = options?.mode || 'default';
  const tone: ButtonTone = options?.tone || 'default';

  return clsx([
    'flex h-[2.5rem] items-center justify-center overflow-hidden rounded-full p-4 text-sm font-bold duration-200 ease-out',
    'disabled:opacity-20 disabled:bg-opacity-100',
    mode === 'default' &&
      clsx([
        tone === 'critical' && 'bg-red',
        tone === 'default' && 'bg-offBlack',
        tone === 'shopPay' && 'bg-shopPay',
        'hover:opacity-80 text-white'
      ]),
    mode === 'outline' &&
      clsx([
        tone === 'critical' && 'border-color-red text-red',
        tone === 'default' && 'border-color-offBlack text-offBlack',
        tone === 'shopPay' && 'border-color-shopPay text-shopPay',
        'bg-transparent border hover:opacity-50'
      ])
  ]);
};

export default function Button({ as = 'button', className, tone, ...props }: Props) {
  const Component = props?.to ? Link : as;

  return <Component className={className} {...props} />;
}
