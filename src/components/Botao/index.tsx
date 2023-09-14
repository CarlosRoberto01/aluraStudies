import React from 'react'
import style from './Botao.module.scss'

interface BotaoProps {
    texto: string
}
export default function Botao({texto}:BotaoProps) {
    return (
        <button className={style.botao}>
            {texto}
        </button>
    )
}


