import { useEffect, useState } from 'react';
import api from '../../../service/api';

import styles from '../style.module.css';
import stylesItem from './style.module.css';

import { locationColor } from '../../../color';

export default function LocalCard({ name }) {
	
	const [location, setLocation] = useState();

	useEffect(() => {
		api.get(`/location/${name}`)
			.then(response => {
				setLocation(response.data);
			})
			.catch(error => console.error(error));
	}, [name])

	return (
		<>
			{
				location ?
					<div
						className={styles.card}
						style={{ backgroundColor: locationColor(location.region.name) }}
					>

						<div className={styles.card__item}>
							<h3 className={styles.card__title}>{location.names[1].name}</h3>
							<div className={styles.card__body}>
								<span className={styles.card__text}>{location.region.name}</span>
							</div>
						</div>

						<div className={styles.card__item}>
							<span className={stylesItem['card__text--number']}>#{location.id < 10 ? `00${location.id}` : location.id < 100 ? `0${location.id}` : location.id}</span>
						</div>

					</div>

					: ''
			}
		</>
	);
}