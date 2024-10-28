import React from 'react';
import SideNav from './_components/SideNav';
import Header from './_components/Header';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className='bg-slate-100 h-screen'>
      {/* Side Navigation */}
      <div className="md:w-64 hidden md:block fixed">
        <SideNav /> {/* Render SideNav here */}
      </div>

      {/* Main Content */}
      <div className="ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
