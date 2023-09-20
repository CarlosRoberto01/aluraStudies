
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'
import Cronometro from '../components/Cronometro';
import { useState } from 'react';
import { TarefaProps } from '../types/tarefas';

function App() {

  const [tarefas, setTarefas] = useState<TarefaProps[] | []>([]);
  const [selecionado, setSelecionado] = useState<TarefaProps>();

  function selecionaTarefa(tarefaSelecionada: TarefaProps) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(
      tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      })
    ))
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro selecionado={selecionado} />
    </div>
  );
}

export default App;
