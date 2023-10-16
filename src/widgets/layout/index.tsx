import Header from 'widgets/header';
import React from 'react';
import Modal from './ui/modal';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="flex flex-col overflow-hidden bg-white pt-16 h-full">
        <div className="h-full  bg-gray-50 relative overflow-y-auto ">{props.children}</div>
      </div>
      <Modal />
    </>
  );
};

export default Layout;
