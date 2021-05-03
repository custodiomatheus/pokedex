import { useContext, useEffect, useState } from 'react';
import styles from './style.module.css';
import api from '../../service/api';

import { SidebarContext } from '../../context/Sibedar';

import { color } from '../../color';

export default function ItemCard({ name }) {

	const { setSidebar } = useContext(SidebarContext);

	const [item, setItem] = useState();

	useEffect(() => {
		api.get(`/item/${name}`)
			.then(response => {
				setItem(response.data);
			})
			.catch(error => console.error(error));
	}, [name])
	
	return (
		<>
			{
				item ?
					<div
						className={styles.card}
						style={{backgroundColor: color(item.category.name)}}
						onClick={() => setSidebar({is_open: true, data: {pokemon: "", item: item}})}
						>

						<div className={styles.card__item}>
							<h3 className={styles.card__title}>{item.names[7].name}</h3>
							<div className={styles.card__body}>
								<span className={styles.card__text}>{item.category.name}</span>
							</div>
						</div>

						<div className={styles.card__image}>
							<img src={item.sprites.default} alt={item.names[7].name} />
						</div>
					</div>

					: ''
			}
		</>
	);
}