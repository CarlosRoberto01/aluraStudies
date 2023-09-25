import React, { useEffect } from 'react'
import Botao from '../Botao'
import Relogio from './Relogio'
import style from './Cronometro.module.scss'
import { TarefaProps } from '../../types/tarefas'
import { useState } from 'react';
import tempoParaSegundos from '../common/utils/time'


interface CronometroProps {
  selecionado: TarefaProps | undefined;
}

export default function Cronometro({ selecionado }: CronometroProps) {

  const [tempo, setTempo] = useState<number>();
  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if(contador > 0){
        setTempo(contador - 1);
        return regressiva (contador - 1);
      }
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>

      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao
        texto='Começar!'
        onClick={() => regressiva(tempo)}
      />


    </div>
  )
}
