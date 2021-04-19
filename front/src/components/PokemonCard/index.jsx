import { useEffect, useState } from 'react';
import styles from './style.module.css';
import api from '../../service/api';

export default function PokemonCard({ name }) {

	const [pokemon, setPokemon] = useState();

	useEffect(() => {
		api.get(`/pokemon/${name}`)
			.then(response => {
				console.log(response.data.types[0].type.name);
				setPokemon(response.data);
			})
			.catch(error => console.error(error));
	}, [])

	const validateType = (type) => {
		return type == 'grass' ? '#5DBE61' : 
		type == 'fire' ? '#F57568' :
		type == 'water' ? '#58A7F2' : 
		type == 'normal' ? '#ABA873' :
		type == 'flying' ? '#075663' :
		type == 'bug' ? '#90B92D' : 
		type == 'poison' ? '#60127F' : 
		type == 'electric' ? '#FACA4A' : 
		type == 'ground' ? '#BEAB20' : 
		type == 'fighting' ? '#7F0A10' : 
		type == 'psychic' ? '#F45691' : 		
		type == 'rock' ? '#463F25' : 
		type == 'ice' ? '#114EAD' : 
		type == 'ghost' ? '#462A52' : 
		type == 'dragon' ? '#8954FC' : 
		type == 'dark' ? '#141414' : 
		type == 'steel' ? '#7A8D89' : 
		type == 'fairy' ? '#F77DA6' : ''
	}
	return (
		<>
			{
				pokemon ?
					<div className={styles.pokemon_container} style={{backgroundColor: validateType(pokemon.types[0].type.name)}}>
						<div className={styles.pokemon__content}>
							<h3 className={styles.pokemon__title}>{pokemon.name}</h3>
							<div className={styles.pokemon__content_data}>
								<span className={styles.pokemon__data}>{pokemon.types[0].type.name}</span>
								<span className={styles.pokemon__data}>{pokemon.types.length > 1 ? pokemon.types[1].type.name : ''}</span>
							</div>
						</div>
						<div className={styles.pokemon_image}>
							<img src={pokemon.sprites.other.dream_world.front_default} alt="Pokemon name" />
						</div>
					</div>
					: ''
			}
		</>
	);
}