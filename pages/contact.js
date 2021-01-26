import Form from '../components/Form'
import { Header } from '../components/Header'
import Salon from '../components/LeSalon'
import img from '../public/images/fond_dégradé_long.png'
import style from '../styles/Contact.module.css'

function Contact() {
  const { container } = style
  return (
    <div
      className={container}
      style={{
        backgroundImage: 'url(' + img + ')',
      }}
    >
      <Header></Header>
      <div className={style.contactUs}>
        <hr />
        <p className={style.bold}>
          Pour prendre rendez-vous, appelez-nous au 09.83.76.37.26
        </p>
        <p className={style.book}>
          Nous sommes ouverts du mardi au vendredi de 9h à 20h, et le samedi de
          10h à 18h.
        </p>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Salon></Salon>
          <Form></Form>
        </div>
      </div>
      <style jsx global>{`
        body {
          height: 100%;
          margin: 0;
        }
      `}</style>
    </div>
  )
}
export default Contact
