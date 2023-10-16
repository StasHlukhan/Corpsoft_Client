import React, { FC } from 'react';
import style from './modal.module.scss';

interface MyModalProps {
  visible: boolean ;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const MyModal: FC<MyModalProps> = ({ children, visible, setVisible }) => {
  const rootClasses = [style.myModal];
  if (visible) {
    rootClasses.push(style.active);
  }
  return (
    <div onClick={() => setVisible(false)} className={rootClasses.join(' ')}>
      <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
