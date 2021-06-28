import { useContext, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import styles from '../style.module.css';
import stylesPokemon from './style.module.css';

import { SidebarContext } from '../../../context/Sibedar';

import { color, typeColor } from '../../../color';

export default function SidebarPokemon({ data }) {

  const { setSidebar } = useContext(SidebarContext);

  const [content, setContent] = useState("SOBRE")

  return (
    <>
      <section className={styles.sidebar__header}>
        <div>
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
        <div>
          <ul className={styles.sidebar__list}>
            <li className={styles.sidebar__item} onClick={() => setContent("SOBRE")}><span className={styles["sidebar__text--dark"]}>Sobre</span></li>
            <li className={styles.sidebar__item} onClick={() => setContent("HABILIDADES")}><span className={styles["sidebar__text--dark"]}>Habilidades</span></li>
            <li className={styles.sidebar__item} onClick={() => setContent("ATAQUES")}><span className={styles["sidebar__text--dark"]}>Ataques</span></li>
            <li className={styles.sidebar__item} onClick={() => setContent("STATS")}><span className={styles["sidebar__text--dark"]}>Stats</span></li>
          </ul>

          <div className={styles.sidebar__content}>
            {
              content === "SOBRE" ?
                "A" :
                content === "HABILIDADES" ?
                  <div className={stylesPokemon['list-habilidades']}>
                    {data.pokemon.abilities.map(habilidade =>
                      <li className={stylesPokemon['list-habilidades__item']}>{habilidade.ability.name}</li>
                    )}
                  </div> :
                  content === "ATAQUES" ?
                    <div className={stylesPokemon['list-ataques']}>
                      {data.pokemon.moves.slice(0, 33).map(ataque =>
                        <li className={stylesPokemon['list-ataques__item']}>{ataque.move.name}</li>
                      )}
                    </div> :
                    <div className={stylesPokemon['list-stats']}>
                      {data.pokemon.stats.map(stat =>
                        <>
                          <li>{stat.stat.name}</li>

                          <div style={{ border: '1px solid #000' }}>
                            <div style={{ backgroundColor: color(data.pokemon.types[0].type.name), width: `${stat.base_stat}%`, maxWidth: '100%' }}>
                              {stat.base_stat}%
                            </div>
                          </div>
                        </>
                      )}
                    </div>
            }
          </div>
        </div>
      </section>
    </>
  );


}