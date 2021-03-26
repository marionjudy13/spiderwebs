import { useState } from 'react'
import styles from './layout.module.scss'
import Burger from '../components/burger/burger'
import Menu from '../components/menu/menu'


export default function Layout({ children }) {
  const [open, setOpen] = useState(false)

  return <div className={styles.container}>
    <Burger open={open} setOpen={setOpen} />
    <Menu open={open} setOpen={setOpen} />
    {children}
  </div>
}
