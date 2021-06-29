import '../Home/Home.css'
import logo_text from '../../img/logo_text.svg';
import { useState } from 'react';
import gallery_felege from '../../img/gallery_felege.svg'
import icon_arrow_left from '../../icons/icon_arrow_left.svg'
import icon_arrow_right from '../../icons/icon_arrow_right.svg'

const Home = () => {

    const [move, setMove] = useState(0)

    const moveLeft = () => {
        setMove(prev => prev - 20.25)
    }
    const moveRight = () => {
        setMove(prev => prev + 20.25)
    }
    return (
        <div className="home-main">
                <section className="new-releases">
                    <div className="text-divider">
                        <h2>New Releases</h2>
                    </div>
                    <div className="carousel_container">
                            <span className="arrow left" onClick={ () => moveRight()}>
								<img src={icon_arrow_left} alt="" />
							</span>
                        <div className="carousel">
                            <div className="slider" style={{ transform:`translate(${move}%)` }}>
                                <section className="gallery-card">
									{<img src={gallery_felege} alt="Album cover Felege" />}
									{<div className="text">
										<h5>Felege</h5>
										<p>Situna Balk</p>
									</div>}
								</section>
                                <section className="gallery-card">
									<img src={gallery_felege} alt="Album cover Felege" />
									<div className="text">
										<h5>Felege</h5>
										<p>Situna Balk</p>
									</div>
								</section>
                                <section className="gallery-card">
									<img src={gallery_felege} alt="Album cover Felege" />
									<div className="text">
										<h5>Felege</h5>
										<p>Situna Balk</p>
									</div>
								</section>
                                <section className="gallery-card">
									<img src={gallery_felege} alt="Album cover Felege" />
									<div className="text">
										<h5>Felege</h5>
										<p>Situna Balk</p>
									</div>
								</section>
                                <section className="gallery-card">
									<img src={gallery_felege} alt="Album cover Felege" />
									<div className="text">
										<h5>Felege</h5>
										<p>Situna Balk</p>
									</div>
								</section>
                            </div>    
                        </div>
						<span className="arrow right" onClick={() => moveLeft()}>
							<img src={icon_arrow_right} alt="" />
						</span>
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