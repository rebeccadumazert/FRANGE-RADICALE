import facebook from '../public/images/facebook.png'
import instagram from '../public/images/instagram.png'
import logo from '../public/images/FR_logo.png'
import style from '../styles/Header.module.css'
import twitter from '../public/images/twitter.png'

export function Header() {
  const { container, logoContainer, headerMenu, icon, logoStyle } = style
  return (
    <div className={container}>
      <div className={logoContainer}>
        {/* <Image
          src='/images/FR_logo.png'
          alt='logo frange radicale'
          width={8333}
          height={2969}
        ></Image> */}
        <img className={logoStyle} src={logo} alt='' />
      </div>

      <ul className={headerMenu}>
        <li>A propos</li>
        <li>Tarifs</li>
        <li>Contact</li>
        <li>Galerie</li>
        <li>
          <img src={instagram} className={icon} alt='instagram icon' />
          <img src={facebook} className={icon} alt='facebook icon' />
          <img src={twitter} className={icon} alt='twitter icon' />
        </li>
      </ul>
    </div>
  )
}
