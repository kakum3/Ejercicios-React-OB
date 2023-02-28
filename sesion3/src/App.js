
import './App.css';
import ComponenteA from './components/componenteA';

function App() {

  const contactoPrueba = {
    nombre : 'Jesús',
    apellido: 'Espartero',
    email: 'kakum_3@hotmail.com',
    conectado: false,

  }
  return (
    <div className="App">
      <header className="App-header">
        <ComponenteA contacto={contactoPrueba}/>
      </header>
    </div>
  );
}

export default App;
