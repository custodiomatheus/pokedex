import { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';

import styles from '../style.module.css';

import { SidebarContext } from '../../../context/Sibedar';

import { itemTypeColor, typeItem } from '../../../color';

export default function SidebarItem({ data }) {

  const { setSidebar } = useContext(SidebarContext);

  return (
    <>
      <section className={styles.sidebar__header}>
        <div>

          <i onClick={() => setSidebar({ is_open: false, data: null })}>
            <IoMdClose color="var(--white)" size="23" style={{ float: 'right' }} cursor="pointer" />
          </i>
          <h1 className={styles.sidebar__title}>{data.item.names[7].name}</h1>

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
        <div>
          <p className={styles["sidebar__text--dark"]}>{data.item.effect_entries[0].effect}</p>
          <p className={styles["sidebar__text--dark"]}>{data.item.effect_entries[0].short_effect}</p>
        </div>
      </section>
    </>
  );


}