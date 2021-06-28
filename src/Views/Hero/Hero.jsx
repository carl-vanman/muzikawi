import '../Hero/Hero.css'

const Hero = () => {

	return (
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
	)
}

export default Hero