import { useRouter } from 'next/router'
import {Navitem,NavProps} from "./navitem"
import styles from './navbar.module.css'
export default function Navbar() {
    const navs: NavProps[] = [
      {link: '/',title:'Home'},
      {link:'/PCR',title:'PCR'}
    ]
    const router = useRouter()
    return (
      <>
       <nav className={styles.nav}>
        {navs.map(x=> <Navitem key={x.link} isActive={x.link === router.asPath} link={x.link} title={x.title} ></Navitem>)}
       </nav>
      </>
    )
  }