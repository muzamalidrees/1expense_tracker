import React, { useState, useContext } from 'react'
import { AppContext } from '../contexts/GlobalState'

export const NewTransaction = () => {
    const [detail, setDetail] = useState('')
    const [amount, setAmount] = useState('')

    const { addTransaction } = useContext(AppContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            detail: detail,
            amount: +amount
        }
        addTransaction(newTransaction)
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
                        onChange={(e) => setDetail(e.target.value)}
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
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <button type='submit' className='btn'>Add Transaction</button>
            </form>
        </div>
    )
}
