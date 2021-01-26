import Link from 'next/link'
import SocialNetwork from '../components/SocialNetwork'
import logo from '../public/images/FR_logo.png'
import style from '../styles/Header.module.css'

export function Header() {
  const { container, logoContainer, headerMenu, icon, logoStyle } = style
  return (
    <div className={container}>
      <div className={logoContainer}>
        <img className={logoStyle} src={logo} alt='' />
      </div>

      <ul className={headerMenu}>
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
        <SocialNetwork></SocialNetwork>
      </ul>
    </div>
  )
}
