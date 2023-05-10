import { FC } from 'react';
import Hero from '~@screens/Home/Hero';
import Menu from "~@screens/Menu";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
	return (
		<>
			<Hero />
			<Menu/>
		</>
	)
};
export default Home;
