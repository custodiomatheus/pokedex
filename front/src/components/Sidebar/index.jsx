import { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';

import styles from './style.module.css';

import { SidebarContext } from '../../context/Sibedar';

import { pokemonTypeColor, typeColor, itemTypeColor, typeItem } from '../../color';

export default function Sidebar() {

	const { sidebar, setSidebar } = useContext(SidebarContext);

	const { is_open, data } = sidebar;

	return (
		<>
			{
				is_open ?
					data.pokemon ? SidebarPokemon() : SidebarItem()
				: ''
			}
		</>
	);

	function SidebarPokemon() {
		return (
			<sidebar style={{ backgroundColor: pokemonTypeColor(data.pokemon.types[0].type.name) }} className={styles.sidebar}>

				<section className={styles.sidebar__header}>
					<div className={styles.sidebar__container}>

						<i onClick={() => setSidebar({ is_open: false, data: null })}>
							<IoMdClose color="var(--white)" size="23" style={{ float: 'right' }} cursor="pointer" />
						</i>
						<h1 className={styles.sidebar__title}>{data.pokemon.name}</h1>

						<div className={styles.sidebar__content}>
							<ul className={styles.sidebar__list}>
								<li className={styles.sidebar__item} style={{ backgroundColor: typeColor(data.pokemon.types[0].type.name) }}>
									<span className={styles.sidebar__text}>{data.pokemon.types[0].type.name}</span>
								</li>
								{
									data.pokemon.types.length > 1 ?
										<li className={styles.sidebar__item} style={{ backgroundColor: typeColor(data.pokemon.types[0].type.name) }}>
											<span className={styles.sidebar__text}>{data.pokemon.types[1].type.name}</span>
										</li>
										: ''
								}

							</ul>

							<span className={styles.sidebar__text}>
								#{data.pokemon.id < 10 ? `00${data.pokemon.id}` : data.pokemon.id < 100 ? `0${data.pokemon.id}` : data.pokemon.id}
							</span>
						</div>

						<div className={styles.sidebar__image}>
							<img src={data.pokemon.sprites.other["official-artwork"].front_default} height="180" alt="Pokemon" />
						</div>

					</div>
				</section>

				<section className={styles.sidebar__body}>
					<div className={styles.sidebar__container}>

					</div>
				</section>
			</sidebar>
		)
	}

	function SidebarItem() {
		return (
			<sidebar className={styles.sidebar} style={{ backgroundColor: itemTypeColor(data.item.category.name) }}>

				<section className={styles.sidebar__header}>
					<div className={styles.sidebar__container}>

						<i onClick={() => setSidebar({ is_open: false, data: null })}>
							<IoMdClose color="var(--white)" size="23" style={{ float: 'right' }} cursor="pointer" />
						</i>
						<h1 className={styles.sidebar__title}>{data.item.name}</h1>

						<div className={styles.sidebar__content}>
							<ul className={styles.sidebar__list}>
								<li className={styles.sidebar__item} style={{ backgroundColor: typeItem(data.item.category.name) }}>
									<span className={styles.sidebar__text}>{data.item.category.name}</span>
								</li>
							</ul>

							<span className={styles.sidebar__text}>
								#{data.item.id < 10 ? `00${data.item.id}` : data.item.id < 100 ? `0${data.item.id}` : data.item.id}
							</span>
						</div>

						<div className={styles.sidebar__image}>
							<img src={data.item.sprites.default} height="180" alt="Item" />
						</div>

					</div>
				</section>

				<section className={styles.sidebar__body}>
					<div className={styles.sidebar__container}>
						<p className={styles.sidebar__text}>{data.item.effect_entries[0].effect}</p>
						<p className={styles.sidebar__text}>{data.item.effect_entries[0].short_effect}</p>
					</div>
				</section>
			</sidebar>
		)
	}

}