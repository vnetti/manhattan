import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { MenuItem } from '~@screens/Home/Menu';
import MenuPlaceholder from '~@screens/Home/Menu/Menu.placeholder.tsx';
import SlideControls from '~@screens/Home/Menu/SlideControls';
import { useGetMenuByLimitQuery } from '~@store/api/menu.api.ts';
import SectionHeading from '~@ui/SectionHeading';
import classes from './Menu.module.scss';
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
	const [slide, setSlide] = useState(1);
	const onChangeSlide = (action: number) => {
		setSlide(action);
	};

	const [limit, setLimit] = useState(8);
	useEffect(() => {
		const onChangeLimit = () => {
			if (window.innerWidth < 768) {
				setSlide(1);
				setLimit(5);
			} else setLimit(8);
		};
		onChangeLimit();
		window.addEventListener('resize', onChangeLimit);
		return () => {
			window.removeEventListener('resize', onChangeLimit);
		};
	}, []);

	const { data: dataMenu, isLoading } = useGetMenuByLimitQuery({ page: slide, limit: limit });

	return (
		<section className='section'>
			<SectionHeading
				title='menu'
				heading='кухня'
			/>
			<div className={classes.slideWrapper}>
				<ul className={cn(classes.menu, 'row')}>
					{isLoading ? (
						<MenuPlaceholder limit={limit} />
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
				<SlideControls
					onChange={onChangeSlide}
					disable={slide}
				/>
			</div>
			<Row>
				<Col className={classes.menuLink}>
					<Link to={'/menu'}>Все меню</Link>
				</Col>
			</Row>
		</section>
	);
};
export default Menu;
