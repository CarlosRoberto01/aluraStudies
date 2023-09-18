import React, { useState } from 'react'
import style from './Lista.module.scss'
import Item from './Item'


export default function Lista() {
    let [tarefas, setTarefas] = useState(
        [{
            tarefa: 'React',
            tempo: '02:00:00'
        }, {
            tarefa: 'Javascript',
            tempo: '01:00:00'
        }, {
            tarefa: 'Typescript',
            tempo: '03:00:00'
        }]
    )

    return (
        <aside className={style.listaTarefa}>
            <h2 onClick={() => {
                setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00" }]) 
            }}> Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}


