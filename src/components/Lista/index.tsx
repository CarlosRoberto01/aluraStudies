
import style from './Lista.module.scss'
import Item from './Item'
import { TarefaProps } from '../../types/tarefas'


export default function Lista({tarefas} : {tarefas: TarefaProps[]}) {
    
    return (
        <aside className={style.listaTarefa}>
            <h2> Estudos do dia</h2>
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


