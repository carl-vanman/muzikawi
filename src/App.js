import './App.css';
import logo_text from './img/logo_text.svg';

function App() {
	return (
		<div className="App">
			<nav />
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
					<div className="gallery" />
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
							<img src={logo_text} alt="Muzikawi text logo" width="144" height="auto" />
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
			<footer />
		</div>
	);
}

export default App;
