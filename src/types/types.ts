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

export type globalState = {
    transactions: transaction[]
    delTransaction: (id: number) => void
    addTransaction: (transaction: transaction) => void
}

export type App = {
    children: React.ReactNode
}