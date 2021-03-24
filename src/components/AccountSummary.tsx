import React, { useContext } from 'react'
import { AppContext } from '../contexts/GlobalState'
import { transaction } from '../types/types'

export const AccountSummary = () => {

    const { transactions }: { transactions: transaction[] } = useContext(AppContext)

    const trAmounts = transactions.map((tr: transaction) => tr.amount)
    const income: string = Math.abs(trAmounts.filter((amount: number) => amount > 0)
        .reduce((acc: number, amount: number) => (acc += amount), 0)).toFixed(2)

    const expense: string = Math.abs(trAmounts.filter(amount => amount < 0)
        .reduce((acc: number, amount: number) => (acc += amount), 0)).toFixed(2)

    return (
        <div className='ac-sum-container' >
            <div>
                <h4 className='ac-sum-money income' >
                    Income
            </h4>
                < p >
                    PKR {income}
                </p>
            </div>
            < div >
                <h4 className='ac-sum-money expense' >
                    Expense
            </h4>
                < p >
                    PKR {expense}
                </p>
            </div>
        </div>
    )
}
