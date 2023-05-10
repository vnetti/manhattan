import { Placeholder } from 'react-bootstrap';
import { FC } from "react";

export const EventItemPlaceholder: FC = () => (
	<>
		<Placeholder animation={'glow'}>
			<Placeholder style={{ minHeight: '100%', minWidth: '100%' }} />
		</Placeholder>
		<Placeholder animation={'glow'}>
			<Placeholder style={{ minHeight: '100%', minWidth: '100%' }} />
		</Placeholder>
		<Placeholder animation={'glow'}>
			<Placeholder style={{ minHeight: '100%', minWidth: '100%' }} />
		</Placeholder>
		<Placeholder animation={'glow'}>
			<Placeholder style={{ minHeight: '100%', minWidth: '100%' }} />
		</Placeholder>
	</>
);
