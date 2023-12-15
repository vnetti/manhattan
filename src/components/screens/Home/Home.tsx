import { FC } from 'react';
import Hero from '~@screens/Home/Hero';
import Menu from "~@screens/Home/Menu";
import Info from "~@screens/Home/Info";
import TechRider from "~@screens/Home/TechRider";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
	return (
		<>
			<Hero />
			<Menu/>
			<Info/>
			<TechRider/>
		</>
	)
};
export default Home;
