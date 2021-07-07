import { useContext, useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { toast } from 'react-toastify';

import api from '../../../service/api';

import styles from '../style.module.css';

import { SidebarContext } from '../../../context/Sibedar';
import { FavoritosContext } from '../../../context/Favoritos';

import { color } from '../../../color';

export default function PokemonCard({ name, isFavoritos }) {

	const { setSidebar } = useContext(SidebarContext);
	const { favoritos, setFavoritos } = useContext(FavoritosContext)

	const [pokemon, setPokemon] = useState();

	useEffect(() => {
		api.get(`/pokemon/${name}`)
			.then(response => {
				if (isFavoritos) {
					setPokemon({ ...response.data, isFavorito: true })
				} else {
					setPokemon(response.data);
				}
			})
			.catch(error => console.error(error));
	}, [name, isFavoritos])

	const favorite = async (pokemonName) => {
		const finded = favoritos.find(pokemon => pokemon.name === pokemonName)
		if (!finded) {
			try {
				await setFavoritos(favoritos => [...favoritos, { name: pokemonName, isFavorito: true }])
				toast.success(`${pokemonName} adiciona a sua lista de favoritos`);
			} catch (error) {
				toast.error(`Erro ao adicionar ${pokemonName} a lista de favoritos`);
			}
		} else {
			toast.warning(`O pokemon ${pokemonName} já estava na sua lista de favoritos`);
		}
	}

	const unFavorite = (pokemonName) => {
		favoritos.find((pokemon, index) => {
			if (pokemon?.name === pokemonName) {
				favoritos.splice(index, 1);
				return index;
			}
			return index;
		})

	}

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
							{
								!pokemon.isFavorito ?
									<div className={styles.favorite}>
										<AiFillHeart color="var(--white)" onClick={() => favorite(pokemon.name)} className={styles['favorite--fill']} />
										<AiOutlineHeart color="var(--white)" className={styles['favorite--outline']} />
									</div> :
									<div className={styles.unFavorite}>
										<AiFillHeart color="var(--white)" className={styles['unFavorite--fill']} />
										<AiOutlineHeart color="var(--white)" onClick={() => unFavorite(pokemon.name)} className={styles['unFavorite--outline']} />
									</div>
							}
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