import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import SectionHeading from '~@ui/SectionHeading';
import classes from './Contacts.module.scss';

interface ContactsProps {}

const Contacts: FC<ContactsProps> = ({}) => {
	return (
		<section className={classes.section}>
			<SectionHeading
				title='place'
				heading='контакты'
			/>
			<Row className={'gap-4 gap-md-0'}>
				<Col md={5} lg={5} xl={4}>
						<ul className={classes.contacts}>
							<ul className={classes.item}>
								<span className={classes.heading}>Адрес</span>
								<address>Набережная реки Фонтанки, 90 (вход в арке с белыми колоннами)</address>
							</ul>
							<ul className={classes.item}>
								<span className={classes.heading}>телефон</span>
								<a href='tel: +78127131945'>+7 (812) 713-1945</a>
							</ul>
							<ul className={classes.item}>
								<span className={classes.heading}>режим работы</span>
								<p>Ежедневно с 12:00 до 06:00</p>
							</ul>
							<ul className={classes.separation}>
								<hr/>
							</ul>
							<ul className={classes.item}>
								<span className={classes.heading}>директор</span>
								<p>Лидия Эмильевна, <a href="tel: +79219635550">+7(921) 963-55-50</a></p>
							</ul>
							<ul className={classes.item}>
								<span className={classes.heading}>арт-директор</span>
								<p>Илиния Ионашко, <a href="tel: +79819894330">+7(981) 989-43-30</a></p>
							</ul>
						</ul>
				</Col>
				<Col>
					<iframe
						className={classes.map}
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.376145345214!2d30.328343256238565!3d59.92590043104985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631aa6e3b3193%3A0xe7c54da95407a617!2z0L3QsNCx0LXRgNC10LbQvdCw0Y8g0YDQtdC60Lgg0KTQvtC90YLQsNC90LrQuCwgOTDQujEsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDQoNC-0YHRgdC40Y8sIDE5MTE4MA!5e0!3m2!1sru!2sby!4v1683240130843!5m2!1sru!2sby'
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					/>
				</Col>
			</Row>
		</section>
	);
};
export default Contacts;
