import styles from './style.module.css';
import { useHistory } from 'react-router-dom'

export default function Home() {

	const history = useHistory();

	return (
		<div className={styles.container}>
			<section className={styles.choice_content}>
				<div className={styles.choice}>
					<div className={styles.choice__1} onClick={() => history.push("/pokemon")}><span>Pokemon</span></div>
					<div className={styles.choice__2}><span>Favoritos</span></div>
				</div>
				<div className={styles.choice}>
					<div className={styles.choice__3}><span>Itens</span></div>
					<div className={styles.choice__4}><span>Filmes</span></div>
				</div>
			</section>

			<section className={styles.image_content}>
				<img src="https://i.pinimg.com/originals/25/d1/7c/25d17c2b9859417618eb499dacae3795.png" height="350" />
			</section>
		</div>
	);
}