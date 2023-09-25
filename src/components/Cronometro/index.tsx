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
  useEffect( () => {
    if(selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
   }, [selecionado])

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      Tempo: {tempo}
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao
        texto='Começar!'
      />


    </div>
  )
}
