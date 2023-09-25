import React from 'react';
import style from './Botao.module.scss';

interface BotaoProps {
    texto: string,
    type?: "button" | "submit" | "reset" | undefined
}

export default function Botao({ texto, type }: BotaoProps) {
    return (
        <button
            className={style.botao}
            type={type || "button"}
        >
            {texto}
        </button>
    )
}
