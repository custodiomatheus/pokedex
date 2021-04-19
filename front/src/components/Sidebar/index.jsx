import { useEffect, useState } from 'react';
import styles from './style.module.css';
import api from '../../service/api';

export default function Sidebar(props) {


	return (
		<sidebar className={styles.sidebar}>
			<section className={styles.container__info}>

			</section>

			<section className={styles.container__data}>

			</section>
		</sidebar>
	);
}