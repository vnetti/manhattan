import { FC, PropsWithChildren, ReactNode } from "react";
import SectionHeading from '~@ui/SectionHeading';
import ActionButton from '~@ui/buttons/ActionButton';

interface ColumnProps {
	title: string;
	heading: string;
	children: ReactNode;
	onClick: () => void;
	_class: string;
}

const Column: FC<PropsWithChildren<ColumnProps>> = ({ title, heading, onClick, _class, children }) => {
	return (
		<article className={_class}>
			<SectionHeading
				title={title}
				heading={heading}
				mb={0.875}
			/>
			{children}
			<div>
				<ActionButton
					title={'Подробнее'}
					onClick={() => onClick()}
				/>
			</div>
		</article>
	);
};
export default Column;
