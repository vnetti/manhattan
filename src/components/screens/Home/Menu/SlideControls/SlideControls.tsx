import { FC } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import classes from './SlideControls.module.scss';

interface SlideControlsProps {
  onChange: (action: number) => void,
	disable: number
}

const SlideControls: FC<SlideControlsProps> = ({onChange, disable}) => {
	return (
		<>
			<button
				className={classes.button}
				disabled={disable === 1}
        onClick={() => onChange(1)}
      >
				<HiChevronLeft />
			</button>
			<button
				className={classes.button}
				disabled={disable === 2}
        onClick={() => onChange(2)}
      >
				<HiChevronRight />
			</button>
		</>
	);
};
export default SlideControls;
