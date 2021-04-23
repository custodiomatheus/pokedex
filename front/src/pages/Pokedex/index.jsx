import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';

import api from '../../service/api';

import PokemonCard from '../../components/PokemonCard';
import ItemCard from '../../components/ItemCard';

import styles from './style.module.css';

export default function Pokemon(props) {

	const search = props.match.params.search;

	const history = useHistory();

	const [data, setData] = useState([]);
	const [amountItens, setAmoutItens] = useState(50);

	useEffect(() => {
		api.get(`/${search}?limit=${amountItens}&offset=0`)
			.then(response => {
				setData(response.data.results);
			})
			.catch(error => console.error(error));
	}, [amountItens])

	return (
		<div className={styles.container}>
			<h2 className={styles.container__title}>
				<HiArrowNarrowLeft style={{ marginRight: '1vw' }} onClick={() => history.push("/")} cursor="pointer" />
				{
					search === "pokemon" ?
						"Pokemon" : "Items"
				}
			</h2>
			<section className={styles.container__content}>
				{
					data.map(data =>
						search === "pokemon" ?
							<PokemonCard key={data.name} name={data.name} /> :
							<ItemCard key={data.name} name={data.name} />
					)
				}
			</section>
			<h4 className={styles.container__text} onClick={() => setAmoutItens(amountItens + 20)} >Ver mais itens</h4>
		</div>
	);
}