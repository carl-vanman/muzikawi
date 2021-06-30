import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo_stroke from '../../img/logo_stroke.svg'
import icn_global from '../../img/icn_Global.svg'
import './Navbar.css'

function NavBar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
					<img src={logo_stroke} alt="Company logo" width="144" height="auto" />
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Label
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Publishing
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Studio
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Live & Closeup
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Podcast
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							About
						</Link>
					</li>
					<li className="lang-selection">
						<img src={icn_global} alt="Change language" width="144" height="auto" className="global" />
						<Link to="/" className="lang-links">English</Link>
						<div></div>
						<Link to="/" className="lang-links">Swedish</Link>
					</li>
				</ul>
			</div>
		</nav>

	)
}

export default NavBar
