import './FooterNav.css'

const FooterNav = () => {

	return (
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
	)
}

export default FooterNav