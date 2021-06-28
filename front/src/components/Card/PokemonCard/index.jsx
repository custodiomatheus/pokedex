import { useContext, useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import api from '../../../service/api';

import styles from '../style.module.css';

import { SidebarContext } from '../../../context/Sibedar';

import { color } from '../../../color';

export default function PokemonCard({ name, favoritos }) {

	const { setSidebar } = useContext(SidebarContext);

	const [pokemon, setPokemon] = useState();

	useEffect(() => {
		if (favoritos) {} else {
			api.get(`/pokemon/${name}`)
				.then(response => {
					setPokemon(response.data);
				})
				.catch(error => console.error(error));
		}
	}, [name, favoritos])

	const favoritar = (pokemon) => {}

	return (
		<>
			{
				pokemon ?
					<div
						className={styles.card}
						style={{ backgroundColor: color(pokemon.types[0].type.name) }}
						onClick={() => setSidebar({ is_open: true, data: { pokemon: pokemon, item: "" } })}
					>

						<div className={styles.card__item}>
							<h3 className={styles.card__title}>{pokemon.name}</h3>
							<div className={styles.favorite} onClick={() => favoritar(pokemon)}>
								<AiOutlineHeart className={styles['favorite--outline']} />
								<AiFillHeart className={styles['favorite--fill']} />
							</div>
							<div className={styles.card__body}>
								<span className={styles.card__text}>{pokemon.types[0].type.name}</span>
								<span className={styles.card__text}>{pokemon.types.length > 1 ? pokemon.types[1].type.name : ''}</span>
							</div>
						</div>

						<div className={styles.card__image}>
							<img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
						</div>
					</div>

					: ''
			}
		</>
	);
}