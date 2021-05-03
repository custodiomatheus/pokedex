import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';

import api from '../../service/api';

import PokemonCard from '../../components/PokemonCard';
import ItemCard from '../../components/ItemCard';
import LocalCard from '../../components/LocalCard';

import { SidebarContext } from '../../context/Sibedar';

import styles from './style.module.css';

export default function Pokemon(props) {

	const search = props.match.params.search;

	const { setSidebar } = useContext(SidebarContext);

	const history = useHistory();

	const [data, setData] = useState([]);
	const [amountItens, setAmoutItens] = useState(50);

	useEffect(() => {
		api.get(`/${search}?limit=${amountItens}&offset=0`)
			.then(response => {
				setData(response.data.results);
			})
			.catch(error => console.error(error));
	}, [amountItens, search])

	return (
		<div className={styles.container}>
			<h2 className={styles.container__title}>
				<HiArrowNarrowLeft style={{ marginRight: '1vw' }} onClick={() => { setSidebar({ is_open: false, data: null }); history.push("/") }} cursor="pointer" />
				{
					search === "pokemon" ?
						"Pokemon" : search === "item" ? "Items" : "Locais"
				}
			</h2>
			<section className={styles.container__content}>
				{
					data.map(data =>
						search === "pokemon" ?
							<PokemonCard key={data.name} name={data.name} /> :
							search === "item" ?
								<ItemCard key={data.name} name={data.name} /> :
								search === "location" ?
									<LocalCard key={data.name} name={data.name} /> : ''
					)
				}
			</section>
			<h4 className={styles.container__text} onClick={() => setAmoutItens(amountItens + 20)} >Ver mais itens</h4>
		</div>
	);
}