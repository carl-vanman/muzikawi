import './GalleryCard.css'

const GalleryCard = ({data}) => {

	const altText = `Album cover ${data.title}`

	return (
		<section className="gallery-card">
			{<img src={data.img} alt={altText} />}
			{<div className="text">
				<h5>{data.title}</h5>
				<p>{data.artist}</p>
			</div>}
		</section>
	)
}

export default GalleryCard