import React, {useRef} from 'react'

const Formulario = ({onAñadirContacto}) => {
  const name = useRef('');
  const email = useRef('');

  function añadirContacto (e){
    e.preventDefault();

    const nuevoContacto = {nombre: name.current.value, email:email.current.value, conectado: true}

    onAñadirContacto(nuevoContacto);
    name.current.value = '';
    email.current.value= '';
  }

  return (
  <form onSubmit={añadirContacto} className="contact-component">
  <h2>Añadir contacto: </h2>
  <input ref={name} name='name' placeholder='Nombre Contacto'className='form-control '/>
  <input ref={email} name='email'type='email' placeholder='Email Contacto'/>
    <button onClick={añadirContacto} type='submit' className='submit-button'>Añadir</button>
  </form>
  )
}

export default Formulario