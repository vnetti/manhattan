import { FC } from 'react';
import Contacts from '~@components/layout/Footer/Contacts';
import classes from './Footer.module.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
	return (
		<>
			<Contacts />
			<footer className={classes.footer}>
				<p>Copyright © 2022. Все права защищены.</p>
				<p>
					Design by{' '}
					<a
						href='https://d-e-n.ru/'
						target='_blank'
					>
						d-e-n.ru
					</a>
				</p>
			</footer>
		</>
	);
};
export default Footer;
