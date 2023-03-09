import React,{useState} from 'react'
import ContactoLista from './Components/contactoLista';
import Formulario from './Components/formulario';
import './App.css'

const App = () => {
  const contactoDefecto = [
    {nombre: 'Jesus', email: 'kakum3@gmail.com', conectado: true},
    {nombre: 'Maria', email: 'Maria@gmail.com', conectado: false}
  ];
  const [nuevoContacto, setNuevoContacto] = useState(contactoDefecto);
  function cambioEstado (contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];

    tempContact[index].estado = !tempContact[index].estado;
    setNuevoContacto(tempContact)

  }

  function remove (contacto){
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];
    tempContact.splice(index, 1);
    setNuevoContacto(tempContact);
  }

  function añadirContacto(contacto){
    const tempContact = [...nuevoContacto];
    tempContact.push(contacto);
    setNuevoContacto(tempContact);


  }





  return (
    <div className='App'>
      <h1>Contactos</h1>
      <div className='card-container'>
        {nuevoContacto.map((contacto, index)=>{
          return(
            <ContactoLista key={index} contacto={contacto} cambioEstado = {cambioEstado} remove ={remove}></ContactoLista>

        )})}
      <Formulario onAñadirContacto={añadirContacto}></Formulario>
      </div>

    </div>
  )
}

export default App
