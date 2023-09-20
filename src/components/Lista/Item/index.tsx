import React from 'react'
import style from './Item.module.scss'
import { TarefaProps } from '../../../types/tarefas'

interface ItemProps extends TarefaProps {
    selecionaTarefa: (tarefaSelecionada: TarefaProps) => void
}

export default function Item({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: ItemProps) {

    return (
        <li
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
            onClick={() => selecionaTarefa({
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            })} >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}
