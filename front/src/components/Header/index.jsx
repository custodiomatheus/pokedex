import styles from './style.module.css';
import { FaSearch } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';

export default function Header() {
	return (
		<header className={styles.header}>

			<section className={styles.header_section}>
				<div className={styles.container_title}>
					<h1 className={styles.header_title}>Qual pokemon </h1>
					<h1 className={styles.header_title}>você está procurando?</h1>
				</div>

				<div className={styles.container_search}>
					<FaSearch className={styles.search__icon} />
					<IoMdSend className={styles.search__icon_send} />
					<input className={styles.search__input} placeholder="Procure por um pokemon, filme, habilidade, etc" />
				</div>
			</section>

		</header>
	);
}