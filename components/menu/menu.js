import React from 'react';
import styles from './menu.module.scss'

const Menu = ({ open }) => {
  console.log(`menu state`, open)

  return (
    <div className={[
      styles.menu,
      open ? styles.openMenu : ``,
    ].join(` `)}>
      <ul>
        <li><a>about me</a></li>
        <li><a>my work</a></li>
        <li><a>working with me</a></li>
        <li><a>contact</a></li>
      </ul>
    </div>
  )
}
export default Menu;
