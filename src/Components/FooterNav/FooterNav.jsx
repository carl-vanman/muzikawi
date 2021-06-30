import './FooterNav.css'
import { Link } from 'react-router-dom'

const FooterNav = () => {

	return (
		<nav className="footer-nav">
			<div className="nav browse">
				<h4>Browse</h4>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/">Releases</Link>
					</li>
					<li>
						<Link to="/">Artists</Link>
					</li>
					<li>
						<Link to="/">Albums</Link>
					</li>
				</ul>
			</div>
			<div className="nav about">
				<h4>About</h4>
				<ul>
					<li>
						<Link to="/">Philosophy</Link>
					</li>
					<li>
						<Link to="/">Contact us</Link>
					</li>
					<li>
						<Link to="/">Team</Link>
					</li>
				</ul>
			</div>
			<div className="nav Resources">
				<h4>Resourses</h4>
				<ul>
					<li>
						<Link to="/">News Letter</Link>
					</li>
					<li>
						<Link to="/">Lefal & DMCA</Link>
					</li>
					<li>
						<Link to="/">Privacy Policy</Link>
					</li>
					<li>
						<Link to="/">FAQ</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default FooterNav