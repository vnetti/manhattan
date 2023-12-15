import { FC } from 'react';
import classes from './ActionButton.module.scss';

interface BookProps {
	title: string;
	onClick: () => void;
}

const ActionButton: FC<BookProps> = ({ title, onClick }) => {
	return (
		<button
			className={classes.button}
			onClick={() => onClick()}
		>
			{title}
		</button>
	);
};
export default ActionButton;
