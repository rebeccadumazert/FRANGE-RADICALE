import facebook from '../public/images/facebook.png'
import instagram from '../public/images/instagram.png'
import style from '../styles/Header.module.css'
import twitter from '../public/images/twitter.png'

function SocialNetwork() {
  const { icon } = style
  return (
    <li>
      <img src={instagram} className={icon} alt='instagram icon' />
      <img src={facebook} className={icon} alt='facebook icon' />
      <img src={twitter} className={icon} alt='twitter icon' />
    </li>
  )
}
export default SocialNetwork
