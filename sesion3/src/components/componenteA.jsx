import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto';
import ComponenteB from './componenteB';


const componenteA = ({contacto}) => {
  return (
    <div>
    <h2>
      Nombe: {contacto.nombre}
    </h2>
    <h3>
      Apellidos: {contacto.apellido}
    </h3>
    <h3>
      Email: {contacto.email}
    </h3>
    <ComponenteB estado={true} />

      
    </div>
  );
};


componenteA.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),

};


export default componenteA;
