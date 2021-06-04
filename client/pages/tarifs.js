import Head from 'next/head'
import { Header } from '../components/Header'
import img from '../public/images/bg1.png'
import style from '../styles/Tarifs.module.css'

function Tarifs() {
  return (
    <>
      <Head>
        <style>{globalStyle}</style>
      </Head>
      <Header></Header>
      <div className={style.container}>
        <p>Pour un devis personnalisé, contactez-nous par mail ou téléphone.</p>
        <div className={style.blackLine}></div>
        <div className={style.tableContainer}>
          <table>
            <tbody>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>Coupe tondeuse</td>
                <td>15€</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>Coupe courte</td>
                <td>25€</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>Coupe longue</td>
                <td>35€</td>
              </tr>
            </tbody>
          </table>
          <hr className={style.verticalHr} />
          <table>
            <tbody>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>Couleur racines</td>
                <td>35€</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>
                  Coupleur complète
                </td>
                <td>55€</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>Balayage</td>
                <td>45€ à 80€</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>Patine</td>
                <td>15€ à 35€</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>
                  Décoloration racines
                </td>
                <td>80€</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>
                  Décoloration totale
                </td>
                <td>160€ à 200€</td>
              </tr>
            </tbody>
          </table>
          <hr className={style.verticalHr} />
          <table>
            <tbody>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>Séchage naturel</td>
                <td>15€</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>Brushing</td>
                <td>25 à 35€</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={style.blackLine}></div>
      </div>
    </>
  )
}

const globalStyle = `
body {
  background-image: url(${img})
}
`
export default Tarifs
