import './App.css'
import { Usuario } from './models/Usuario';

function App()
{

  const u1 = new Usuario('João da Silva', 37);

  return (
    <>
      <p>{u1.apresentar()}</p>
    </>
  )
}

export default App
