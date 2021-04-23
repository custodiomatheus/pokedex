import styles from './style.module.css';

export default function Header() {
	return (
		<header className={styles.header}>

			<section className={styles.header__container}>
				<div>
					<h1 className={styles.header__title}>Qual pokemon </h1>
					<h1 className={styles.header__title}>você está procurando?</h1>
				</div>
			</section>

		</header>
	);
}