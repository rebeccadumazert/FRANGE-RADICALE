function Form() {
  return (
    <div
      style={{
        padding: '50px 0px 0px 80px',
      }}
    >
      <p>Nous contacter</p>
      <form style={{ display: 'flex', flexDirection: 'column' }} action=''>
        <input type='text' placeholder='Nom' />
        <input type='text' placeholder='Email' />
        <input type='text' placeholder='Téléphone' />
        <input type='text' placeholder='Votre message' />
        <button>Envoyer</button>
      </form>
    </div>
  )
}
export default Form
