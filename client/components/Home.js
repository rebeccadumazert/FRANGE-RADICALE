import Image from 'next/image'
import Link from 'next/link'
import facebook from '../public/images/facebookneg.png'
import google from '../public/images/googleneg.png'
import instagram from '../public/images/instagramneg.png'
import styles from '../styles/Home.module.css'

export function Home() {
  const { headerHomeContainer, icon, gif, homeResponsive } = styles
  return (
    <div>
      <ul className={headerHomeContainer}>
        <li>
          <Link href='/aPropos'>À propos</Link>
        </li>
        <li>
          <Link href='/tarifs'>Tarifs</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
        <li>
          <Link href='/instagram'>Galerie</Link>
        </li>
        <li>
          <img src={instagram} className={icon} alt='instagram icon' />
          <img src={facebook} className={icon} alt='facebook icon' />
          <img src={google} className={icon} alt='google icon' />
        </li>
      </ul>
      <div className={gif}>
        <Image
          src='/images/FR-gifbis.gif'
          alt='logo frange radicale'
          width={600}
          height={600}
        />
      </div>
      {/* <div className={homeResponsive}>
        <div>
          <img src='' alt='' />
        </div>
        <ul>
          <li>
            <Link href='/aPropos'>À propos</Link>
          </li>
          <li>
            <Link href='/tarifs'>Tarifs</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
          <li>
            <Link href='/instagram'>Galerie</Link>
          </li>
          <li>
            <img src={instagram} className={icon} alt='instagram icon' />
            <img src={facebook} className={icon} alt='facebook icon' />
            <img src={google} className={icon} alt='google icon' />
          </li>
        </ul>
      </div> */}
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
