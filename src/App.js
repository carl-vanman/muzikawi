import './App.css';

import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './Views/About/About.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Home from './Views/Home/Home.jsx';

import FooterNav from './Components/FooterNav/FooterNav.jsx';
import ContactForm from './Components/ContactForm/ContactForm.jsx';
import SocialMedia from './Components/SocialMedia/SocialMedia';

function App() {
	return (
		<Router>
			<div className="App">
				<nav>
					<Navbar />
				</nav>
				<header>
					<Hero />
				</header>
				<main>
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/about" exact>
							<About />
						</Route>
					</Switch>
				</main>
				<footer>
					<FooterNav />
					<ContactForm />
					<SocialMedia />
				</footer>
			</div>
		</Router>
	);
}

export default App;
