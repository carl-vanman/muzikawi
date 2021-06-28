import '../Home/Home.css'

import logo_text from '../../img/logo_text.svg';

const Home = () => {

	return (
		<div className="home-main">
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
		</div>
	)
}

export default Home