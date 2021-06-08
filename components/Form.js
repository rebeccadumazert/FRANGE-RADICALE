import React, { useState } from 'react'

import axios from 'axios'
import style from '../styles/Form.module.css'

const API_PATH =
  'http://localhost:1992/react-contact-form/api/contact/index.php'

function Form() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [mailSent, setMailSent] = useState(false)
  const [error, setError] = useState(null)

  function handleFormSubmit() {
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: { message, name, phone },
    })
      .then((result) => {
        setMailSent(result.data.sent)
      })
      .catch((error) => setError(error.message))
    console.log(result.data.sent, error)
  }
  return (
    <div
      style={{
        padding: '50px 0px 0px 80px',
      }}
    >
      <p style={{ fontFamily: 'HiroshigeStd-Bold' }}>Nous contacter</p>
      <form action='#' style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          className={style.input}
          type='text'
          id='name'
          name='name'
          placeholder='Nom'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className={style.input}
          type='email'
          id='email'
          name='email'
          placeholder='E-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={style.input}
          type='tel'
          pattern='(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}'
          id='phone'
          name='phone'
          placeholder='Format : +336131200'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <textarea
          className={style.textarea}
          value={message}
          id='message'
          name='message'
          placeholder='Votre message...'
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <input
          style={{ fontFamily: 'HiroshigeStd-Bold' }}
          className={style.button}
          onClick={handleFormSubmit}
          type='submit'
          value='Submit'
        ></input>
        <div>{mailSent && <div>Thank you for contcting us.</div>}</div>
      </form>
    </div>
  )
}
export default Form
