import Form from '../components/Form'
import Head from 'next/head'
import { Header } from '../components/Header'
import Salon from '../components/LeSalon'
import img from '../public/images/bg3.png'
import style from '../styles/Contact.module.css'

function Contact() {
  return (
    <div>
      <Head>
        <style>{globalStyle}</style>
      </Head>
      <Header></Header>
      <div className={style.contactUs}>
        {/* <div className={style.blackLine}></div> */}
        <p className={style.bold}>
          Pour prendre rendez-vous, appelez-nous au 09.83.76.37.26
        </p>
        <p className={style.book}>
          Nous sommes ouverts du mardi au vendredi de 9h à 20h, et le samedi de
          10h à 18h.
        </p>
        <div className={style.blackLine}></div>
        <div
          className={style.containerFormSalon}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Salon></Salon>
        </div>
      </div>
    </div>
  )
}
const globalStyle = `
body {
    background-image: url(${img})
}
`
export default Contact
