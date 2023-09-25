import React, { useState } from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { TarefaProps } from '../../types/tarefas';
import { v4 as uuidv4 } from 'uuid';

interface FormularioProps {
  setTarefas: React.Dispatch<React.SetStateAction<TarefaProps[]>>;
}

export default function Formulario({ setTarefas }: FormularioProps) {
  const [tarefaPadrao, setTarefaPadrao] = useState({
    tarefa: '',
    tempo: '00:00:00',
  });

  function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTarefas((prevTarefas) => [
      ...prevTarefas,
      {
        tarefa: tarefaPadrao.tarefa,
        tempo: tarefaPadrao.tempo,
        selecionado: false,
        completado: false,
        id: uuidv4()
      }
    ]);
    setTarefaPadrao({
      tarefa: '',
      tempo: '00:00'
    })
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefaPadrao.tarefa}
          onChange={(evento) =>
            setTarefaPadrao({ ...tarefaPadrao, tarefa: evento.target.value })
          }
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tarefaPadrao.tempo}
          onChange={(evento) =>
            setTarefaPadrao({ ...tarefaPadrao, tempo: evento.target.value })
          }
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit" texto="Adicionar" />
    </form>
  );
}
