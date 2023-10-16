import React from 'react';
import classnames from 'classnames';

type Props = { className?: string; isLoading: boolean; children: React.ReactNode };

const Loader: React.FC<Props> = ({ className, isLoading, children }) => {
  if (isLoading) {
    return (
      <div className={classnames('pt-5 flex justify-center items-center h-full', className)}>
        <div className="border  border-t-4 border-purple-800 rounded-full animate-spin w-10 h-10"></div>
      </div>
    );
  }

  return children;
};

export default Loader;
