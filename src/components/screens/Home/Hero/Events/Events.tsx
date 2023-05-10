import { FC, useState } from 'react';
import EventItem from '~@screens/Home/Hero/Events/EventItem';
import { EventItemPlaceholder } from '~@screens/Home/Hero/Events/EventItem/EventItem.placeholder.tsx';
import { useGetPostersQuery } from '~@store/api';
import classes from './Events.module.scss';

interface EventsProps {}

const Events: FC<EventsProps> = ({}) => {
	const [currentTab, setCurrentTab] = useState(1);

	function onClick(id: number) {
		setCurrentTab(id);
	}
	const { data: dataEvents, isLoading } = useGetPostersQuery(`_sort=date&_page=${currentTab}&_limit=4`);

	return (
		<div className={classes.wrapper}>
			<div className={classes.menu}>
				<button
					className={classes.button}
					onClick={() => onClick(1)}
					disabled={currentTab === 1}
				>
					Ближайшие
				</button>
				<button
					className={classes.button}
					onClick={() => onClick(2)}
					disabled={currentTab === 2}
				>
					Скоро
				</button>
			</div>

			<div className={classes.events}>
				{isLoading ? (
					<EventItemPlaceholder />
				) : (
					dataEvents!.map(event => (
						<EventItem
							_class={classes.item}
							key={event.id}
							data={event}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default Events;
