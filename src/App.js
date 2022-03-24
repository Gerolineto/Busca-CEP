import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu cep..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 38408250</h2>
        <span>Rua Teste Algum</span>
        <span>Complemento: algum </span>
        <span>Vila Rosa</span>
        <span>Campo Grande -MS </span>
        <span>Brasil</span>

      </main>

    </div>
  );
}

export default App;
