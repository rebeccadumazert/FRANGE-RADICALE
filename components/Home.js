import Image from 'next/image'
import Link from 'next/link'
import facebook from '../public/images/facebookneg.png'
import instagram from '../public/images/instagramneg.png'
import styles from '../styles/Home.module.css'
import twitter from '../public/images/twitterneg.png'

export function Home() {
  const { headerHomeContainer, icon } = styles
  return (
    <div>
      <ul className={headerHomeContainer}>
        <li>
          <Link href='/aPropos'>A propos</Link>
        </li>
        <li>
          <Link href='/tarifs'>Tarifs</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
        <li>
          <Link href='/galerie'>Galerie</Link>
        </li>
        <li>
          <img src={instagram} className={icon} alt='instagram icon' />
          <img src={facebook} className={icon} alt='facebook icon' />
          <img src={twitter} className={icon} alt='twitter icon' />
        </li>
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
