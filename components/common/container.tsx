import { FC } from 'react';

import type { PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className="flex justify-center">
      <div className={`w-full max-w-[1600px] px-6 lg:px-9 ${className}`}>{children}</div>
    </div>
  );
};

export default Container;
