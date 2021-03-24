import React, { useState, useContext } from 'react'
import { AppContext } from '../contexts/GlobalState'
import { transaction, addTr } from '../types/types'

export const NewTransaction = () => {
    const [detail, setDetail] = useState<string>('')
    const [amount, setAmount] = useState<number>(NaN)

    const { addTransaction }: { addTransaction: addTr } = useContext(AppContext)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newTransaction: transaction = {
            id: new Date().getTime(),
            detail: detail,
            amount: +amount
        }
        addTransaction(newTransaction)
        setAmount(NaN)
        setDetail('')
    }
    return (
        <div>
            <h3>
                Add New transaction
            </h3>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label
                        htmlFor='detail'> Detail</label>
                    <input
                        type='text'
                        placeholder='Enter detail'
                        value={detail}
                        onChange={(e: React.ChangeEvent<{ value: unknown }>) => setDetail(e.target.value as string)}
                        required
                    />
                </div>
                <div className='form-control'>
                    <label
                        htmlFor='amount'>Amount  <small>(positive for income and negative for expense)</small></label>
                    <input
                        type='number'
                        placeholder='Enter amount'
                        value={amount}
                        onChange={(e: React.ChangeEvent<{ value: unknown }>) => setAmount(e.target.value as number)}
                        required
                    />
                </div>
                <button type='submit' className='btn'>Add Transaction</button>
            </form>
        </div>
    )
}
