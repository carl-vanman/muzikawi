import './Carousel.css'
import { useState } from 'react';
import gallery_felege from '../../img/gallery_felege.svg'
import gallery_gofere from '../../img/gallery_gofere.svg'
import gallery_fountain from '../../img/gallery_fountain.svg'
import gallery_halkemidi from '../../img/gallery_halkemidi.svg'
import icon_arrow_left from '../../icons/icon_arrow_left.svg'
import icon_arrow_right from '../../icons/icon_arrow_right.svg'
import GalleryCard from '../GalleryCard/GalleryCard.jsx'

/*eslint no-extend-native: ["error", { "exceptions": ["Array"] }]*/
Array.prototype.move = function (from, to) {
	this.splice(to, 0, this.splice(from, 1)[0]);
  };

const Carousel = () => {

	const [galleryCardData, SetGalleryCardData] = useState(
		[
			{id: 1, title: "Felege", img: gallery_felege, artist: "Situna Balk"},
			{id:2, title: "Gofere", img: gallery_gofere, artist: "Azmach"},
			{id:3, title: "Fountain of Living...", img: gallery_fountain, artist: "Abba Jorga Mesfin"},
			{ id:4, title: "Halkemidi", img: gallery_halkemidi, artist: "Situna Balk"},
			{ id:5, title: "Felege", img: gallery_felege, artist: "Situna Balk"}
		]
	)

	const moveRight = () => {
		const newArr = [...galleryCardData];
		newArr.move(0, galleryCardData.length -1)
		
		SetGalleryCardData(newArr)
	}
	const moveLeft = () => {
		const newArr = [...galleryCardData];
		newArr.move(galleryCardData.length -1, 0)
		
		SetGalleryCardData(newArr)
	}

	return (
		<section className="new-releases">
			<div className="text-divider">
				<h2>New Releases</h2>
			</div>
			<div className="carousel_container">
				<span className="arrow left" onClick={moveLeft}>
					<img src={icon_arrow_left} alt="" />
				</span>
				<div className="carousel">
					<div className="slider">
						{
							galleryCardData.map(data => <GalleryCard key={data.id} data={data}/>)
						}
					</div>
				</div>
				<span className="arrow right" onClick={moveRight}>
					<img src={icon_arrow_right} alt="" />
				</span>
			</div>
		</section>
	)
}

export default Carousel