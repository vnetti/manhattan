import { FC, useCallback, useState } from "react";
import Item from '~@screens/Home/TechRider/List/Item';
import classes from './List.module.scss';

interface ListProps {}

const List: FC<ListProps> = ({}) => {
	const ITEMS = [
		{
			id: 1,
			title: 'loudspeakers',
			subItems: [
				'Acoustic system BELL Top 600W x 2',
				'Acoustic system BELL Mid 600W x 2',
				'Acoustic system BELL Sub 1000W x 2',
				'Font monitor Yamaha SM12V 300W x 2',
				'Backside monitor Dynacord 500W x 2'
			]
		},
		{
			id: 2,
			title: 'amplifier',
			subItems: [
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet'
			]
		},
		{
			id: 3,
			title: 'foh',
			subItems: [
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet'
			]
		},
		{
			id: 4,
			title: 'backline',
			subItems: [
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet'
			]
		},
		{
			id: 5,
			title: 'microphone set',
			subItems: [
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet'
			]
		},
		{
			id: 6,
			title: 'dj equipment',
			subItems: [
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet',
				'Lorem ipsum dolor sit amet'
			]
		}
	];

	const [activeItem, setActiveItem] = useState(1);

	const callbacks = {
		onSetActiveItem: useCallback((id: number) => activeItem === id ? setActiveItem(0) : setActiveItem(id), [activeItem])
	};

	return (
		<ul className={classes.list}>
			{ITEMS.map(item => (
				<ul key={item.id}>
					<Item
						isActive={activeItem === item.id}
						item={item}
						onClick={callbacks.onSetActiveItem}
					/>
				</ul>
			))}
		</ul>
	);
};
export default List;
