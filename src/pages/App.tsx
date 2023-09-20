
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'
import Cronometro from '../components/Cronometro';
import { useState } from 'react';
import { TarefaProps } from '../types/tarefas';

function App() {
  
  const [tarefas, setTarefas] = useState<TarefaProps[] | []>([])
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
