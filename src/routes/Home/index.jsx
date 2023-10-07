import './home.css'
import { Link } from 'react-router-dom';
export default function Home() {

    return (
      <main>
          <h1 className="titulo__main">Bem-vindo Vamos começar !!</h1>
          <div className="foto__cadastro">
            <img src="./img/jovem_da_bicicleta.png" alt="foto do jovem da bicicleta" />
          </div>
          <Link to="/cadastrar_bike" className='botao__cadastro'>Cadastre sua Bike</Link>
      </main>

    );
}