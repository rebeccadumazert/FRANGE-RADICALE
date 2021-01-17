import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export function Home() {
  return (
    <div>
      <ul className={styles.headerHomeContainer}>
        <li>
          <Link href='/aPropos'>
            <a>Home</a>
          </Link>
        </li>
        <li>Contact</li>
        <li>Galerie</li>
        <li>Réseaux sociaux</li>
      </ul>
      <div className={styles.gif}>
        <Image
          src='/images/FR-gifbis.gif'
          alt='logo frange radicale'
          width={600}
          height={600}
        />
      </div>
      <style jsx global>{`
        body {
          background-color: black;
        }
        a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}
