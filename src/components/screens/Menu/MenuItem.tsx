import cn from 'classnames';
import { FC } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { GiClick } from 'react-icons/gi';
import { TbClick } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { IMenu } from '~@types/menu.interface.ts';
import PriceInfo from '~@ui/PriceInfo';
import classes from './MenuItem.module.scss';

interface MenuItemProps {
	item: IMenu;
	index: number;
}

const MenuItem: FC<MenuItemProps> = ({ item, index }) => {
	return (
		<li className={cn(classes.item, 'col col-md-5', index % 2 === 0 ? 'offset-md-1' : 'offset-md-r-1')}>
			<Link
				className={classes.preview}
				to={`/menu/${item.id}`}
				style={{ backgroundImage: `url(/images/menu/${item.preview}.jpg)` }}
			>
				<BrowserView>
					<TbClick
						color={'#ffffff'}
						size={24}
					/>
				</BrowserView>
				<MobileView>
					<GiClick
						color={'#ffffff'}
						size={24}
					/>
				</MobileView>
			</Link>
			<h3 className={classes.title}>
				<Link to={`/menu/${item.id}`}>{item.title}</Link>
			</h3>
			<span className={classes.weight}>{item.weight} гр</span>
			<p className={classes.description}>{item.description}</p>
			<PriceInfo _class={classes.price}>{item.price}</PriceInfo>
		</li>
	);
};
export default MenuItem;
