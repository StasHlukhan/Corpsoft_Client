import classnames from 'classnames';
import './KGButton.css';
import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const KGButton: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <button className={classnames('kg-button', className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default KGButton;
