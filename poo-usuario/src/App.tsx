import './App.css'
import { Usuario } from './models/Usuario';

function App()
{

  const u1 = new Usuario('João da Silva', 37);
  const u2 = new Usuario('Maria Oliveira', 25);

  

  return (
    <>
      <p>{u1.apresentar()}</p>
      <p>{u2.apresentar()}</p>
    </>
  )
}

export default App
