import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Menu.module.scss';

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
	const menuItems = [
		{
			title: 'Главная',
			path: '/'
		},
		{
			title: 'Меню',
			path: '/menu'
		},
		{
			title: 'Афиша',
			path: '/poster'
		},
		{
			title: 'Сотрудничество',
			path: '/cooperation'
		},
		{
			title: 'Галерея',
			path: '/gallery'
		},
		{
			title: 'Новости',
			path: '/news'
		}
	];

	return (
		<>
			<ul className={classes.menu}>
				{menuItems.map((item, index) => (
					<li
						className={classes.item}
						key={index}
					>
						<NavLink to={item.path}>{item.title}</NavLink>
					</li>
				))}
			</ul>
		</>
	);
};
export default Menu;
