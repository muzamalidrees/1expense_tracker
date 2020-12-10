import React, { useContext } from 'react'
import { AppContext } from '../contexts/GlobalState'

export const Balance = () => {

    const { transactions } = useContext(AppContext)
    const trAmounts = transactions.map(tr => tr.amount)
    const balance = trAmounts.reduce((acc, amount) => (acc += amount), 0).toFixed(2)

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
