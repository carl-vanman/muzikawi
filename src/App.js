import './App.css';
import logo_text from './img/logo_text.svg';
import logo_solid from './img/logo_solid.svg';
import icon_facebook from './icons/icon_facebook.svg';
import icon_instagram from './icons/icon_instagram.svg';
import icon_youtube from './icons/icon_youtube.svg';

function App() {
	return (
		<div className="App">
			<nav className="navigation" />
			<header>
				<section className="hero">
					<div className="img-hero">
						<h1>
							Taking the finest of Ethiopian music <br /> to the world!
						</h1>
						<p>
							Itat assequia voluption rest re rati to et pe a sit, consequi que voloren ihictemque alis
							ipicaep raturi
						</p>
						<button className="learn-more">Learn More</button>
						<div className="checks">
							<label className="container">
								<input type="checkbox" />
								<span className="checkmark" />
							</label>
							<label className="container">
								<input type="checkbox" />
								<span className="checkmark" />
							</label>
							<label className="container">
								<input type="checkbox" />
								<span className="checkmark" />
							</label>
							<label className="container">
								<input type="checkbox" />
								<span className="checkmark" />
							</label>
						</div>
					</div>
				</section>
			</header>
			<main>
				<section>
					<div className="title">
						<div className="text-divider">
							<h2>New Releases</h2>
						</div>
					</div>
				</section>
				<section className="banner">
					<article className="banner-card">
						<div className="img radio" />
						<div className="content">
							<p>
								Agnihicient qui con et poreped expedig enistio beritis mil inulliciam volum quunt,
								ipistius ut et voluptatur am essum
							</p>
							<button className="learn-more">Learn More</button>
						</div>
					</article>
					<article className="banner-card">
						<div className="img podcast">
							<img src={logo_text} alt="Muzikawi logo" width="144" height="auto" />
							<h3>Podcast</h3>
							<p>Itat assequia voluption rest re rati to et pe a sit, consequi</p>
						</div>
						<div className="content">
							<p>
								Agnihicient qui con et poreped expedig enistio beritis mil inulliciam volum quunt,
								ipistius ut et voluptatur am essum
							</p>
							<button className="learn-more">Learn More</button>
						</div>
					</article>
				</section>
			</main>
			<footer>
				<nav className="footer-nav">
					<div className="nav browse">
						<h4>Browse</h4>
						<ul>
							<li>
								<a src="#">Home</a>
							</li>
							<li>
								<a src="#">Releases</a>
							</li>
							<li>
								<a src="#">Artists</a>
							</li>
							<li>
								<a src="#">Albums</a>
							</li>
						</ul>
					</div>
					<div className="nav about">
						<h4>About</h4>
						<ul>
							<li>
								<a src="#">Philosophy</a>
							</li>
							<li>
								<a src="#">Contact us</a>
							</li>
							<li>
								<a src="#">Team</a>
							</li>
						</ul>
					</div>
					<div className="nav Resources">
						<h4>Resourses</h4>
						<ul>
							<li>
								<a src="#">News Letter</a>
							</li>
							<li>
								<a src="#">Lefal & DMCA</a>
							</li>
							<li>
								<a src="#">Privacy Polic</a>y
							</li>
							<li>
								<a src="#">FAQ</a>
							</li>
						</ul>
					</div>
				</nav>
				<form className="contact-form">
					<h4>Contact us</h4>
					<label type="text">
						<input placeholder="Name" />
					</label>
					<label type="text">
						<input placeholder="Email" />
					</label>
					<label type="text">
						<input placeholder="Message" />
					</label>
					<button>Send message</button>
				</form>
				<section className="social-media">
					<img src={logo_solid} alt="Muzikawi logo" width="164" height="auto" />
					<h5>Follow us on our platforms</h5>
					<div className="platforms">
						<a src="#">
							<img src={icon_facebook} alt="Facebook" width="40" height="auto" />
						</a>
						<a src="#">
							<img src={icon_instagram} alt="Instagram" width="40" height="auto" />
						</a>
						<a src="#">
							<img src={icon_youtube} alt="Youtube" width="40" height="auto" />
						</a>
					</div>
					<small>Copyright 2020. All Rights Reserved. Muzikawi</small>
				</section>
			</footer>
		</div>
	);
}

export default App;
