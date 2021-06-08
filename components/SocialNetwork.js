import Link from 'next/link'
import facebook from '../public/images/facebook.png'
import google from '../public/images/google.png'
import instagram from '../public/images/instagram.png'
import style from '../styles/Header.module.css'

function SocialNetwork() {
  const { icon } = style
  return (
    <li>
      <Link href='https://www.instagram.com/frangeradicale/?hl=fr'>
        <a target='_blank'>
          <img src={instagram} className={icon} alt='instagram icon' />
        </a>
      </Link>
      <Link href='https://www.facebook.com/frangeradicale'>
        <a target='_blank'>
          <img src={facebook} className={icon} alt='facebook icon' />
        </a>
      </Link>
      <Link href='https://www.google.com/maps/place/Frange+Radicale/@48.877332,2.386286,15z/data=!4m5!3m4!1s0x0:0x96a682e176a15ee0!8m2!3d48.877332!4d2.386286'>
        <a target='_blank'>
          <img src={google} className={icon} alt='google icon' />
        </a>
      </Link>
    </li>
  )
}
export default SocialNetwork
