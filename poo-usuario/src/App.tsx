import './App.css'
import { useState } from 'react';
import { Usuario } from './models/Usuario';

function App() {
  const [usuario] = useState(new Usuario('Tina', 26, '123456'));
  const [senhaInput, setSenhaInput] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [novaSenha, setNovaSenha] = useState('');

  const verificarSenha = () => {
    const senhaCorreta = usuario.verificarSenha(senhaInput);
    setMensagem(`Senha ${senhaCorreta ? 'correta' : 'incorreta'}!`);
  };
  const redefinirSenha = () => {
    usuario.redefinirSenha(novaSenha);
    setMensagem('Senha redefinida com sucesso!');
    setNovaSenha('');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h3>{usuario.apresentar()}</h3>
      <input
        type="password"
        placeholder="Digite a senha"
        value={senhaInput}
        onChange={e => setSenhaInput(e.target.value)}
      />
      <button onClick={verificarSenha}>Verificar Senha</button>
      <br /><br />
      <input
        type="password"
        placeholder="Nova senha"
        value={novaSenha}
        onChange={e => setNovaSenha(e.target.value)}
      />
      <button onClick={redefinirSenha}>Redefinir Senha</button>
      <br /><br />
      <span>{mensagem}</span>
    </div>
  );
}

export default App;