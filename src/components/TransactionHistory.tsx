import React, { useContext } from 'react'
import { AppContext } from '../contexts/GlobalState'
import { Transaction } from './Transaction'
import { transaction } from '../types/types'

export const TransactionHistory = () => {

    const { transactions }: { transactions: transaction[] } = useContext(AppContext)


    return (
        <div>
            <h3>
                {'History'}
            </h3>
            <ul className='list'>
                {
                    transactions.map((transaction: transaction) => <Transaction
                        transaction={transaction}
                        key={transaction.id}
                    />)
                }
            </ul>
        </div>
    )
}
