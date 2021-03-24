import React, { createContext, useReducer } from 'react'
import AppReducer from '../reducers/AppReducer'
import { transaction, globalState, App } from '../types/types'

const initialGlobalState: globalState = {
    transactions: [],
    delTransaction: (id: number) => { },
    addTransaction: (transaction: transaction) => { }
}

export const AppContext: React.Context<globalState> = createContext(initialGlobalState)

export const GlobalContextProvider = (children: App) => {
    const [state, dispatch] = useReducer(AppReducer, initialGlobalState)

    const delTransaction = (id: number) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    const addTransaction = (transaction: transaction) => {
        dispatch({
            type: 'CREATE_TRANSACTION',
            payload: transaction
        })
    }
    return (
        <AppContext.Provider
            value={{
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }}>
            {children}
        </AppContext.Provider>
    )
}