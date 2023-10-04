import Link from 'next/link'
import styles from './navbar.module.css'
export type NavProps = {
 title: string,
 link: string,
 isActive?: boolean
}

export function Navitem({title,link,isActive}:NavProps) {
    return (
      <>
       <Link href={link} className={ isActive?styles.active:''}>{title}</Link>
      </>
    )
  }