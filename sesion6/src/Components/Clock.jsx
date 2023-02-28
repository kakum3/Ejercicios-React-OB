import React, {useState, useEffect} from 'react';


const Clock = () => {
  const initialState ={
    fecha:new Date(),
    edad: 0,
  nombre: "Martín",
  apellidos: "San Jose"  
};

  const [user, setUser] = useState(initialState);
  useEffect(() => {
    const intervalAge = setInterval(() => {

      actualiceUser();
      
    }, 1000);
    
    return () => {
      clearInterval(intervalAge)
    };
  });

  const actualiceUser=()=>{
  return  setUser({
    fecha: user.fecha,
    edad: user.edad + 1,
    nombre:user.nombre,
    apellidos:user.apellidos
  });
  };

  return (
    <div>
      <h2>
        Hora Actual:
        {user.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {user.nombre} {user.apellidos}
      </h3>
      <h1>Edad: {user.edad}</h1>

    </div>
  )
}

export default Clock