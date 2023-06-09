import { FC, ReactNode } from 'react';
import {Outlet, ScrollRestoration} from 'react-router-dom';
import Footer from '~@components/layout/Footer';
import Header from '~@components/layout/Header';
import {Container} from "react-bootstrap";
import classes from "./Layout.module.scss";
import Contacts from "~@components/layout/Footer/Contacts";

interface LayoutProps {
	children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<Container className={classes.container}>
			<Header />
			<main className={'main'}>
				<Outlet />
				{children}
				<Contacts />
			</main>
			<Footer />
      <ScrollRestoration />
    </Container>
	);
};
export default Layout;
