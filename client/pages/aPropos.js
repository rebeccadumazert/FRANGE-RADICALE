import Head from 'next/head'
import { Header } from '../components/Header'
import img from '../public/images/fond_dégradé_long.png'
import picture from '../public/images/aPropos.jpg'
import style from '../styles/APropos.module.css'

function APropos() {
  const {
    container,
    description,
    intro,
    blackLine,
    pictureContainer,
    pictureAndText,
  } = style
  return (
    <>
      <Head>
        <style>{globalStyle}</style>
      </Head>
      <Header></Header>
      <div className={container}>
        <p className={intro}>
          Frange Radicale est une coopérative de coiffeur·se·s ayant pour but de
          rendre la coiffure plus inclusive, plus solidaire et plus écologique.
        </p>
        <div className={blackLine}></div>
        <div className={pictureAndText}>
          <div className={pictureContainer}>
            <img src={picture} alt='' />
          </div>
          <div>
            <p className={description}>
              En décembre 2020, nous avons ouvert Frange Radicale, une
              Coopérative de Coiffure. Frange Radicale est un salon de coiffure
              qui appartient et qui est géré par les coiffeuses et coiffeurs qui
              y travaillent.
            </p>
            <br />
            <p className={description}>
              Pour l’instant nous sommes trois, Anouck, Léa et Pierre. Les
              décisions sont prises collectivement et les bénéfices sont
              redistribués de manière égalitaire. Chez Frange Radicale il n’y a
              ni patron, ni actionnaire.
            </p>
            <br />
            <p className={description}>
              Nous avons tous les trois travaillé dans différents salons de
              coiffure et cela nous a donné envie de créer une entreprise sans
              hiérarchie, où chacun met la main à la pâte, prend des
              responsabilités et détient le même pouvoir de décision que les
              autres. Cette aventure est un pari mais nous sommes convaincus
              qu’un nouveau mode de gérance, plus équitable, est possible. Nous
              nous sommes inspirés du mouvement coopératif et de nos expériences
              passées dans des collectifs culturels associatifs et/ou militants
              pour imaginer un salon de coiffure où il fait bon travailler et
              venir se faire coiffer.
            </p>
            <br />

            <p className={description}>
              Nous espérons encourager d’autres coiffeuses et coiffeurs et
              d’autres artisans à créer des entreprises coopératives. Nous
              prenons nos marques et sommes conscients des nombreuses choses
              qu’il nous reste à travailler. Nous faisons évoluer notre
              fonctionnement jour après jour, nous apprenons beaucoup et nous
              voulons continuer à nous former. Notre objectif est de proposer
              des coupes et des colorations pour tout type de cheveux à des prix
              abordables tout en conservant un rythme de travail agréable pour
              nous et pour vous.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

const globalStyle = `
body {
    background-image: url(${img})
}
`

export default APropos
