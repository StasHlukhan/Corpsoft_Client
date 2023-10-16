import { RootState } from 'app/model/store';

const selectVisible = (state: RootState) => state.modalReducer.visible
  

const selectModalContent = (state: RootState) => state.modalReducer.content;

export { selectVisible ,selectModalContent};
