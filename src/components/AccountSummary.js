import React, { useContext } from 'react'
import { AppContext } from '../contexts/GlobalState'

export const AccountSummary = () => {

    const { transactions } = useContext(AppContext)

    const trAmounts = transactions.map(tr => tr.amount)
    const income = Math.abs(trAmounts.filter(amount => amount > 0)
        .reduce((acc, amount) => (acc += amount), 0)
        .toFixed(2))
    const expense = Math.abs(trAmounts.filter(amount => amount < 0)
        .reduce((acc, amount) => (acc += amount), 0)
        .toFixed(2))

    return (
        <div className='ac-sum-container'>
            <div>
                <h4 className='ac-sum-money income'>
                    Income
                </h4>
                <p>
                    PKR {income}
                </p>
            </div>
            <div >
                <h4 className='ac-sum-money expense'>
                    Expense
                </h4>
                <p>
                    PKR {expense}
                </p>
            </div>
        </div>
    )
}
