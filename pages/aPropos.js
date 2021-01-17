import { Header } from '../components/Header'
import img from '../public/images/fond_dégradé_long.png'
import style from '../styles/APropos.module.css'

function APropos() {
  const { container, description } = style
  return (
    <div
      className={container}
      style={{
        backgroundImage: 'url(' + img + ')',
      }}
    >
      <Header></Header>
      <p className={description}>
        Frange Radicale est une coopérative de coiffeur·se·s ayant pour but de
        rendre la coiffure plus inclusive, plus solidaire et plus écologique.
      </p>
      <style jsx global>{`
        body {
          height: 100%;
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default APropos
