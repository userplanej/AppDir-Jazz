import clsx from 'clsx';
import Image from 'next/image';

import Price from 'components/price';

export function GridTileImage({
  isInteractive = true,
  background,
  active,
  labels,
  ...props
}: {
  isInteractive?: boolean;
  background?: 'white' | 'pink' | 'purple' | 'black' | 'purple-dark' | 'blue' | 'cyan' | 'gray';
  active?: boolean;
  labels?: {
    title: string;
    amount: string;
    currencyCode: string;
    isSmall?: boolean;
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div className="flex h-full flex-col">
      <div
        className={clsx(
          '  relative mt-3 flex h-0 w-full flex-col items-center  justify-center overflow-hidden pt-[100%]',
          {
            'bg-white dark:bg-white': background === 'white',
            'bg-[#ff0080] dark:bg-[#ff0080]': background === 'pink',
            'bg-[#7928ca] dark:bg-[#7928ca]': background === 'purple',
            'bg-gray-900 dark:bg-gray-900': background === 'black',
            'bg-violetDark dark:bg-violetDark': background === 'purple-dark',
            'bg-blue-500 dark:bg-blue-500': background === 'blue',
            'bg-cyan-500 dark:bg-cyan-500': background === 'cyan',
            'bg-gray-100 dark:bg-gray-100': background === 'gray',
            'bg-gray-100 dark:bg-gray-900': !background,
            relative: labels
          }
        )}
      >
        <div className=" absolute  left-0 top-0  h-full w-full  bg-white">
          <div className=" relative">
            <Image
              className={clsx('block  h-[80%] w-[80%] ', {
                'transition duration-300 ease-in-out hover:scale-105': isInteractive
              })}
              {...props}
              alt={props.title || ''}
            />
          </div>
        </div>
      </div>
      {labels ? (
        <div className=" mb-5  ml-3 mt-0 flex w-3/4 text-sm text-black dark:text-white">
          <h3>{labels.title}</h3>
        </div>
      ) : null}

      {labels ? (
        <div className=" mx-2  mb-2 mt-0 flex w-full text-sm text-black dark:text-white">
          <Price className="" amount={labels.amount} currencyCode={labels.currencyCode} />
        </div>
      ) : null}
    </div>
  );
}