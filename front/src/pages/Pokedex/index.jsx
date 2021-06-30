import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';

import api from '../../service/api';

import PokemonCard from '../../components/Card/PokemonCard';
import ItemCard from '../../components/Card/ItemCard';
import LocalCard from '../../components/Card/LocalCard';

import { SidebarContext } from '../../context/Sibedar';
import { FavoritosContext } from '../../context/Favoritos';

import styles from './style.module.css';

export default function Pokemon(props) {

	const search = props.match.params.search;

	const { setSidebar } = useContext(SidebarContext);
	const { favoritos } = useContext(FavoritosContext);

	const history = useHistory();

	const [amountItens, setAmoutItens] = useState(0);
	const [elements, setElements] = useState([])

	useEffect(() => {
		if (search !== "favoritos")
			api.get(`/${search}?offset=${amountItens}`)
				.then(response => setElements(elements => [...elements, ...response.data.results]))
				.catch(error => console.error(error));
		else
			setElements(favoritos)

	}, [amountItens, search])

	return (
		<div className={styles.container}>
			<h2 className={styles.container__title}>
				<HiArrowNarrowLeft style={{ marginRight: '1vw' }} onClick={() => { setSidebar({ is_open: false, data: null }); history.push("/"); }} cursor="pointer" />
				{
					search === "pokemon" ? "Pokemon" :
						search === "item" ? "Items" :
							search === "location" ? "Locais" :
								"Favoritos"
				}
			</h2>
			<section className={styles.container__content}>
				{
					elements.map(elem =>
						search === "pokemon" ?
							<PokemonCard key={elem.name} name={elem.name} isFavoritos={false} /> :
							search === "item" ? <ItemCard key={elem.name} name={elem.name} /> :
								search === "location" ? <LocalCard key={elem.name} name={elem.name} /> :
									<PokemonCard key={elem.name} name={elem.name} isFavoritos={true} />
					)
				}
			</section>
			<h4 className={styles.container__text} onClick={() => setAmoutItens(amountItens + 20)} >Ver mais itens</h4>
		</div>
	);
}