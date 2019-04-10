import React from "react";

const Header = () => {
	return (
		<header className="header">
			<nav className="nav-bar">
				<ul className="menu">
					<li className="menu-item">
						<a href="#">Pmail</a>
					</li>
					<li className="menu-item">
						<a href="#">Imagens</a>
					</li>
					<li className="menu-item">
						<i className="fas fa-th" />
					</li>

					<button className="btn-login">Fazer login</button>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
