import React from 'react';
import MyModal from 'shared/ui/modal';
import { useAppDispatch, useAppSelector } from 'shared/hooks/reducer';
import { hideModal } from 'shared/store/modal/slice';
import { selectModalContent, selectVisible } from '../model/selector';

const Modal = () => {
  const dispatch = useAppDispatch();
  const visible = useAppSelector(selectVisible);
  const modalContent = useAppSelector(selectModalContent)
  const handleCloseModal = () => {
    dispatch(hideModal());
  };

  return (
    <div>
      {visible && (
        <MyModal visible={visible} setVisible={handleCloseModal}>
          {modalContent}
        </MyModal>
      )}
    </div>
  );
};

export default Modal;


