import cn from 'classnames';
import { FC } from 'react';
import { MenuItem } from '~@screens/Menu';
import { useGetMenuQuery } from '~@store/api/menu.api.ts';
import SectionHeading from '~@ui/SectionHeading';
import classes from './Menu.module.scss';

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
	const { data: dataMenu, isLoading } = useGetMenuQuery();

	return (
		<section className='section'>
			<SectionHeading
				title='menu'
				heading='кухня'
			/>
			<ul className={cn(classes.menu, 'row')}>
				{isLoading ? (
					<h3>Loading...</h3>
				) : (
					dataMenu!.map((item, index) => (
						<MenuItem
							key={item.id}
							item={item}
							index={index}
						/>
					))
				)}
			</ul>
		</section>
	);
};
export default Menu;
