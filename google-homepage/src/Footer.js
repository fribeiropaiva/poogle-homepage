import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="country">
				<p>Brasil</p>
			</div>
			<div className="footer-menu">
				<ul className="menu">
					<li className="menu-item">
						<a href="#">Publicidade</a>
					</li>
					<li className="menu-item">
						<a href="#">Negócios</a>
					</li>
					<li className="menu-item">
						<a href="#">Sobre</a>
					</li>
				</ul>
				<ul className="menu">
					<li className="menu-item">
						<a href="#">Privacidade</a>
					</li>
					<li className="menu-item">
						<a href="#">Termos</a>
					</li>
					<li className="menu-item">
						<a href="#">Configurações</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
