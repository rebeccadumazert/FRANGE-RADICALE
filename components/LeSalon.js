import SocialNetwork from './SocialNetwork'
import devantureFrangeRad from '../public/images/frange-rad.jpeg'
import style from '../styles/Salon.module.css'

function Salon() {
  return (
    <div className={style.salonInfo}>
      <div className={style.containerImg}>
        <img src={devantureFrangeRad} alt='' />
      </div>
      <div className={style.leSalon}>
        <table>
          <tbody>
            <tr>
              <td className={style.italic}></td>
              <td className={style.title}>Le salon</td>
            </tr>
            <tr>
              <td className={style.italic}>Adresse</td>

              <td className={style.end}>17, rue Carducci 75019 Paris</td>
            </tr>
            <tr>
              <td className={style.italic}>Email</td>
              <td className={style.end}>
                <a
                  className={style.mail}
                  href='mailto:frangeradicale@gmail.com'
                >
                  frangeradicale@gmail.com
                </a>
              </td>
            </tr>
            <tr>
              <td className={style.italic}>Téléphone</td>
              <td className={style.end}>09.83.76.37.26</td>
            </tr>
            <tr>
              <td className={style.socialNetwork}>
                <SocialNetwork></SocialNetwork>
              </td>
              <td className={style.end}>@frangeradicale</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Salon
