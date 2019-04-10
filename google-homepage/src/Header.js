import React from "react";

const Header = () => {
	return (
		<header className="header">
			<nav className="nav-bar">
				<ul className="menu">
					<li className="menu-item">
						<a href="www.gmail.com">Gmail</a>
					</li>
					<li className="menu-item">
						<a href="https://www.google.com.br/imghp?hl=pt-BR&tab=ri">Images</a>
					</li>
					<li className="menu-item">
						<i class="fas fa-th" />
					</li>

					<button className="btn-login">Fazer login</button>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
