import React from "react";

const Main = () => {
	return (
		<main className="main">
			<div className="search-container">
				<img alt="Poogle logo" src="../poogle4.png" />
				<input
					className="search-bar"
					type="text"
					placeholder="Pesquise no Poogle ou digite um URL"
				/>
				<div className="buttons">
					<input
						className="search-button"
						value="Pesquisa Poogle"
						type="submit"
					/>
					<input
						className="search-button"
						value="Estou com Porte"
						type="submit"
					/>
				</div>
			</div>
		</main>
	);
};

export default Main;
