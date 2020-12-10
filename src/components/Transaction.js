import React, { useContext } from 'react'
import { AppContext } from '../contexts/GlobalState'

export const Transaction = ({ transaction }) => {
    const { delTransaction } = useContext(AppContext)

    let { id, detail, amount } = transaction
    const sign = amount > 0 ? '+' : '-'
    const type = amount > 0 ? 'income' : 'expense'
    return (
        <li className={type}>
            {detail}
            <span>{sign}PKR {Math.abs(amount)}</span>
            <button
                className='delete-btn'
                onClick={() => delTransaction(id)}
            >
                X
            </button>
        </li>
    )
}
