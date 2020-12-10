import { createContext, useReducer } from 'react'
import AppReducer from '../reducers/AppReducer'

const initialGlobalState =
{
    transactions: []
}

export const AppContext = createContext(initialGlobalState)

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialGlobalState)

    const delTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    const addTransaction = (transaction) => {
        console.log(transaction)
        dispatch({
            type: 'CREATE_TRANSACTION',
            payload: transaction
        })
    }
    return (
        <AppContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </AppContext.Provider>
    )
}