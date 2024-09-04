import React, { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children,className }) => {
return <div className={["w-full p-10",className].join(' ')}>{children}</div>;
};

export default Container;
