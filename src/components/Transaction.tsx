import React, { useContext } from 'react'
import { AppContext } from '../contexts/GlobalState'
import { delTr, transaction } from '../types/types'

export const Transaction: React.FC<{ transaction: transaction }> = ({ transaction }) => {
    const { delTransaction }: { delTransaction: delTr } = useContext(AppContext)

    let { id, detail, amount }: { id: number, detail: string, amount: number } = transaction
    const sign: string = amount > 0 ? '+' : '-'
    const type: string = amount > 0 ? 'income' : 'expense'
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
