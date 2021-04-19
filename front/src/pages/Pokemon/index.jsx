import { useEffect, useState } from 'react';
import styles from './style.module.css';
import api from '../../service/api';

import PokemonCard from '../../components/PokemonCard';

export default function Pokemon() {

	const [pokemons, setPokemons] = useState([]);
	const [amountItens, setAmoutItens] = useState(20);

	useEffect(() => {
		api.get(`/pokemon?limit=${amountItens}&offset=0`)
			.then(response => {
				setPokemons(response.data.results);
			})
			.catch(error => console.error(error));
	}, [amountItens])

	return (
		<div className={styles.container}>
			<h2 className={styles.container__title}>Pokemon</h2>
			<section className={styles.container__content}>
				{
					pokemons.map(pokemon =>
						<PokemonCard name={pokemon.name} />
					)
				}
			</section>
			<h4 className={styles.container__item} onClick={() => setAmoutItens(amountItens + 20)} >Ver mais itens</h4>
		</div>
	);
}