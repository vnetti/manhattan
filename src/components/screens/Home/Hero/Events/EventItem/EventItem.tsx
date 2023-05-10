import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IPoster } from '~@types/poster.interface.ts';

interface EventItemProps {
	data: IPoster;
	_class: string
}

const EventItem: FC<EventItemProps> = ({ data, _class }) => {
	return (
		<Link
			to={`/poster/${data.preview}`}
			className={_class}
			style={{ backgroundImage: `url(images/events/${data.preview}.jpg)` }}
		/>
	);
};
export default EventItem;
