import styles from './style.module.css';
import { useHistory } from 'react-router-dom'

export default function Home() {

	const history = useHistory();

	return (
		<div className={styles.container}>
			<section className={styles.container__choice}>
				<div className={styles.choice}>
					<div className={styles["choice__item--1"]} onClick={() => history.push("/pokedex/pokemon")}><span className={styles.choice__text}>Pokedex</span></div>
					<div className={styles["choice__item--2"]} onClick={() => history.push("/pokedex/favoritos")}><span className={styles.choice__text}>Favoritos</span></div>
				</div>
				<div className={styles.choice}>
					<div className={styles["choice__item--3"]} onClick={() => history.push("/pokedex/item")}><span className={styles.choice__text}>Itens</span></div>
					<div className={styles["choice__item--4"]} onClick={() => history.push("/pokedex/location")}><span className={styles.choice__text}>Locais</span></div>
				</div>
			</section>

			<section className={styles.container__image}>
				<img src="https://i.pinimg.com/originals/25/d1/7c/25d17c2b9859417618eb499dacae3795.png" height="350" alt="Pikachu" />
			</section>
		</div>
	);
}