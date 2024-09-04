import React from 'react';
import Customers from './Customers';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden w-full">
      <div className="w-full flex-[1] min-w-[300px]">{children}</div>
      <Customers />
    </div>
  );
};

export default Layout;

