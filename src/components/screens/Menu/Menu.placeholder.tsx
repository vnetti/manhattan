import cn from 'classnames';
import { FC } from 'react';
import { Placeholder } from 'react-bootstrap';
import classes from '~@screens/Menu/MenuItem.module.scss';

const MenuItemPlaceholder: FC<{ index: number }> = ({ index }) => {
	return (
		<li className={cn(classes.item, 'col col-md-5', index % 2 === 0 ? 'offset-md-1' : 'offset-md-r-1')}>
			<Placeholder
				className={classes.preview}
				animation={'glow'}
			>
				<Placeholder style={{ width: '100%', height: '100%' }} />
			</Placeholder>
			<Placeholder
				className={classes.title}
				animation={'glow'}
			>
				<Placeholder style={{ width: '100%', height: '100%' }} />
			</Placeholder>
			<Placeholder
				className={classes.weight}
				animation={'glow'}
			>
				<Placeholder style={{ width: '100%', height: '100%' }} />
			</Placeholder>
			<Placeholder
				className={classes.description}
				animation={'glow'}
			>
				<Placeholder style={{ width: '100%', height: '100%' }} />
			</Placeholder>
			<Placeholder
				style={{ border: 'none' }}
				className={classes.price}
				animation={'glow'}
			>
				<Placeholder style={{ width: '100%', height: '100%' }} />
			</Placeholder>
		</li>
	);
};

const MenuPlaceholder: FC<{ limit: number }> = ({ limit }) => {
	const array = new Array(limit).fill('');
	return (
		<>
			{array.map((_, index) => (
				<MenuItemPlaceholder
					key={index}
					index={index}
				/>
			))}
		</>
	);
};

export default MenuPlaceholder;
