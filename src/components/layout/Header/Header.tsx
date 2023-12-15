import cn from 'classnames';
import { FC, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '~@assets/images/manhattan-logo.png';
import ModalWindow from '~@components/ModalWindow';
import Menu from '~@components/layout/Header/Menu';
import ActionButton from '~@components/ui/buttons/ActionButton';
import Burger from '~@ui/buttons/Burger';
import classes from './Header.module.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	function setIsOpenMenuFn() {
		setIsOpenMenu(!isOpenMenu);
	}

	return (
		<header className={classes.header}>
			<Row>
				<Col>
					<Link
						to={'/'}
						className={classes.logo}
					>
						<img
							src={logo}
							alt='logo'
						/>
					</Link>
				</Col>
				<Col className={'d-none d-lg-flex'}>
					<Menu />
				</Col>
				<Col>
					<div className={cn(classes.book)}>
						<ActionButton
							title={'Бронировать'}
							onClick={() => {}}
						/>
					</div>
					<Burger
						_class={cn('d-lg-none')}
						onClick={setIsOpenMenuFn}
						isOpen={isOpenMenu}
						// id={'main-menu'}
					/>
					<ModalWindow isOpen={isOpenMenu}>
						<Menu />
					</ModalWindow>
				</Col>
			</Row>
		</header>
	);
};
export default Header;
