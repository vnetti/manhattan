import { FC, ReactNode } from 'react';
import classes from './ModalWindow.module.scss';
import Portal from "~@components/Portal";

interface ModalWindowProps {
	children: ReactNode;
  isOpen: boolean
}

const ModalWindow: FC<ModalWindowProps> = ({ children, isOpen }) => {
  if (!isOpen) return null

	return (
		<Portal>
      <div className={classes.container}>
        <div className={classes.overlay}></div>
        <div className={classes.content}>{children}</div>
      </div>
    </Portal>
	);
};
export default ModalWindow;
