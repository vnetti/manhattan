import { FC } from 'react';
import classes from './SectionHeading.module.scss';
import cn from "classnames";

interface SectionHeadingProps {
	title: string;
	heading: string;
	mb?: number;
}

const SectionHeading: FC<SectionHeadingProps> = ({ title, heading, mb = 2 }) => {
	return (
		<>
			<span className={cn(classes.title, 'section__title')}>Top "Manhattan" {title}</span>
			<h2
				className={cn(classes.heading, 'section__heading')}
				style={{ marginBottom: mb + 'em' }}
			>
				{heading}
			</h2>
		</>
	);
};
export default SectionHeading;
