
import React, { useState } from 'react'
import Botao from '../Botao'
import style from './Formulario.module.scss'



export default function Formulario() {
    const [tarefaPadrao, setTarefaPadrao] = useState(
        {
        tarefa:"",
        tempo:"00:00:00"
        }     
    )
    
    function adicionarTarefa(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log("peguei")
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor='tarefa'>
                    Adicione um novo estudo
                </label>
                <input
                    type='text'
                    name='tarefa'
                    id='tarefa'
                    value={tarefaPadrao.tarefa}
                    onChange={evento=>setTarefaPadrao({...tarefaPadrao,tarefa: evento.target.value})}
                    placeholder='O que você quer estudar?'
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor='tempo'>
                    Tempo
                </label>
                <input
                    type='time'
                    step='1'
                    name='tempo'
                    value={tarefaPadrao.tempo}
                    onChange={evento => setTarefaPadrao({...tarefaPadrao, tempo: evento.target.value})}
                    id='tempo'
                    min='00:00:00'
                    max='01:30:00'
                    required
                />
            </div>
            <Botao 
                texto='Adicionar'
            />      
            
        </form>

    )
}
