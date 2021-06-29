import './Carousel.css'
import { useState } from 'react';
import gallery_felege from '../../img/gallery_felege.svg'
import gallery_gofere from '../../img/gallery_gofere.svg'
import gallery_fountain from '../../img/gallery_fountain.svg'
import gallery_halkemidi from '../../img/gallery_halkemidi.svg'
import icon_arrow_left from '../../icons/icon_arrow_left.svg'
import icon_arrow_right from '../../icons/icon_arrow_right.svg'

const Carousel = () => {

	const [move, setMove] = useState(0)

	const moveLeft = () => {
		setMove(prev => prev - 20.25)
	}
	const moveRight = () => {
		setMove(prev => prev + 20.25)
	}

	return (
		<section className="new-releases">
			<div className="text-divider">
				<h2>New Releases</h2>
			</div>
			<div className="carousel_container">
				<span className="arrow left" onClick={() => moveRight()}>
					<img src={icon_arrow_left} alt="" />
				</span>
				<div className="carousel">
					<div className="slider" style={{ transform: `translate(${move}%)` }}>
						<section className="gallery-card">
							{<img src={gallery_felege} alt="Album cover Felege" />}
							{<div className="text">
								<h5>Felege</h5>
								<p>Situna Balk</p>
							</div>}
						</section>
						<section className="gallery-card">
							<img src={gallery_gofere} alt="Album cover Felege" />
							<div className="text">
								<h5>Felege</h5>
								<p>Situna Balk</p>
							</div>
						</section>
						<section className="gallery-card">
							<img src={gallery_fountain} alt="Album cover Felege" />
							<div className="text">
								<h5>Felege</h5>
								<p>Situna Balk</p>
							</div>
						</section>
						<section className="gallery-card">
							<img src={gallery_halkemidi} alt="Album cover Felege" />
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
	)
}

export default Carousel