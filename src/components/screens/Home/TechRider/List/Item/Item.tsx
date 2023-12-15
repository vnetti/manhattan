import { FC, useCallback, useEffect, useState } from "react";
import classes from './Item.module.scss';
import cn from "classnames";

interface ItemProps {
	item: {
		id: number,
		title: string;
		subItems: string[];
	}
	isActive: boolean,
	onClick: (id: number) => void
}

const Item: FC<ItemProps> = ({ item, isActive, onClick }) => {

	const [height, setHeight] = useState(0);

	const ulRef = useCallback((node: HTMLElement | null) => {
		if (!node) return null
		else {
			setHeight(node.scrollHeight)
		}
	}, []);

	const [style, setStyle] = useState<{height: string} | null>(null);

	useEffect(() => {
		if (!isActive) setStyle({height: '0'})
		else setStyle({height: height + 'px'})
	}, [isActive])


	return (
		<article className={cn(classes.item, isActive && classes.active)}>
			<h3 className={classes.title} onClick={() => onClick(item.id)}>{item.title}</h3>
			<ul ref={ulRef} style={style!}>
				{item.subItems.map((subItem, index) => (
					<li
						key={index}
						className={classes.subItem}
					>
						{subItem}
					</li>
				))}
			</ul>
		</article>
	);
};
export default Item;
