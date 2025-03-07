const AppReducer = (state, action) => {

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions
                    .filter(tr => tr.id !== action.payload)
            }
        case 'CREATE_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state
    }
}

export default AppReducer