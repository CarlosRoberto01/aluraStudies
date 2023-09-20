import React from 'react'
import style from '../Lista.module.scss'
import { TarefaProps } from '../../../types/tarefas'


export default function Item({ tarefa, tempo, selecionado, completado, id }: TarefaProps) {

    return (
        <li className={style.item} >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}
