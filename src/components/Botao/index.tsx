import React from 'react';
import style from './Botao.module.scss';

interface BotaoProps {
    texto: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

export default function Botao({ texto, type, onClick }: BotaoProps) {
    return (
        <button
            onClick={onClick}
            className={style.botao}
            type={type || "button"}
        >
            {texto}
        </button>
    )
}
