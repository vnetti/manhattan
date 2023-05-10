import React from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {
	children: React.ReactNode;
}

const Portal: React.FC<React.PropsWithChildren<IPortalProps>> = ({ children }) => {
	const [container] = React.useState(() => document.createElement('div'));
	React.useEffect(() => {
		container.id = 'portal'
		document.body.appendChild(container);
		return () => {
			document.body.removeChild(container);
		};
	}, []);

	return ReactDOM.createPortal(children, container);
};

export default Portal
