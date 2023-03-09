import React from 'react'

const ContactoLista = ({contacto, cambioEstado, remove}) => {
  return (
    <div className='contactoLista' >
      <h2>{contacto.nombre}</h2>
      <span>{contacto.email}</span>

      <button style={{backgroundColor: contacto.estado ? 'green': 'red', margin:'5px'}}
      className= 'estado-boton'
      onClick={() =>{ cambioEstado(contacto)
      }}>
      {contacto.estado ? 'Conectado' : 'Desconectado'}

      </button>
      <button className='remove-button' onClick={() =>{
        remove(contacto)
      }}> Borrar</button>
    </div>
  )
}

export default ContactoLista