import './SocialMedia.css'

import logo_solid from '../../img/logo_solid.svg';
import icon_facebook from '../../icons/icon_facebook.svg';
import icon_instagram from '../../icons/icon_instagram.svg';
import icon_youtube from '../../icons/icon_youtube.svg'


const SocialMedia = () => {

	return (
		<section className="social-media">
			<img className="logo" src={logo_solid} alt="Muzikawi logo" width="164" height="auto" />
			<h5>Follow us on our platforms</h5>
			<div className="platforms">
				<a href="https://www.facebook.com/">
					<img src={icon_facebook} alt="Facebook" width="40" height="auto" />
				</a>
				<a href="https://www.instagram.com/">
					<img src={icon_instagram} alt="Instagram" width="40" height="auto" />
				</a>
				<a href="https://www.youtube.com/">
					<img src={icon_youtube} alt="Youtube" width="40" height="auto" />
				</a>
			</div>
			<small>Copyright 2020. All Rights Reserved. Muzikawi</small>
		</section>
	)
}
export default SocialMedia