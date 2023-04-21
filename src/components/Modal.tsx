import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { type ReactNode } from 'react';

interface ModalProps {
  title: string;
  children: ReactNode;
  open: boolean;
  handleClose: () => void;
}
const Modal = (props: ModalProps) => {
  const { title, children, open, handleClose } = props;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
