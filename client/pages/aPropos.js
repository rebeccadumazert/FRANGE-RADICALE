import Head from 'next/head'
import { Header } from '../components/Header'
import img from '../public/images/fond_dégradé_long.png'
import style from '../styles/APropos.module.css'

function APropos() {
  const { container, description } = style
  return (
    <>
      <Head>
        <style>{globalStyle}</style>
      </Head>
      <div>
        <Header></Header>
        <p className={description}>
          Frange Radicale est une coopérative de coiffeur·se·s ayant pour but de
          rendre la coiffure plus inclusive, plus solidaire et plus écologique.
        </p>
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
