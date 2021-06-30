import { useContext } from 'react';

import styles from './style.module.css';

import { SidebarContext } from '../../../context/Sibedar';

import SidebarPokemon from '../SidebarPokemon';
import SidebarItem from '../SidebarItem';

import { color } from '../../../color';

export default function Sidebar() {

	const { sidebar } = useContext(SidebarContext);

	const { is_open, data } = sidebar;

	return (
		<>
			{
				is_open ?
					<aside style={{ backgroundColor:  color(data.pokemon ? data.pokemon.types[0].type.name : data.item.category.name) }} className={styles.sidebar}>
						{
							data.pokemon ? <SidebarPokemon data={data} /> : <SidebarItem data={data} />
						}
					</aside>
					: ''
			}
		</>
	);

}