import React, { useContext } from 'react'
import { AppContext } from '../contexts/GlobalState'
import { Transaction } from './Transaction'

export const TransactionHistory = () => {

    const { transactions } = useContext(AppContext)


    return (
        <div>
            <h3>
                {'History'}
            </h3>
            <ul className='list'>
                {
                    transactions.map(transaction => <Transaction
                        transaction={transaction}
                        key={transaction.id}
                    />)
                }
            </ul>
        </div>
    )
}
