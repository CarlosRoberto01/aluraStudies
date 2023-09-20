
import style from './Lista.module.scss'
import Item from './Item'
import { TarefaProps } from '../../types/tarefas'

interface ListaProps {
    tarefas: TarefaProps[]
    selecionaTarefa: (tarefaSelecionada: TarefaProps) => void
}

export default function Lista({ tarefas, selecionaTarefa }: ListaProps) {

    return (
        <aside className={style.listaTarefa}>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map(item => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}


