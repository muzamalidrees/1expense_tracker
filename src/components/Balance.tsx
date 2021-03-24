import React, { useContext } from 'react'
import { AppContext } from '../contexts/GlobalState'
import { transaction } from '../types/types'

export const Balance = () => {

    const { transactions }: { transactions: transaction[] } = useContext(AppContext)
    const trAmounts: number[] = transactions.map((tr: transaction) => tr.amount)
    const balance: string = trAmounts.reduce((acc: number, amount: number) => (acc += amount), 0).toFixed(2)

    return (
        <>
            <h4>
                Your balance
            </h4>
            <h1 id='balance'>
                PKR {balance}
            </h1>
        </>
    )
}
