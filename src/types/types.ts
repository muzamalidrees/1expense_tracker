import React from 'react'

export type transaction = {
    id: number
    detail: string
    amount: number
}

export type action = {
    type: 'DELETE_TRANSACTION'
    payload: number
} | {
    type: 'CREATE_TRANSACTION'
    payload: transaction
}

export type addTr = (transaction: transaction) => void
export type delTr = (id: number) => void

export type globalState = {
    transactions: transaction[]
    delTransaction: delTr
    addTransaction: addTr
}

export type App = {
    children: React.ReactNode
}