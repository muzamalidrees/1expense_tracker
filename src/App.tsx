import React, { useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { TransactionHistory } from './components/TransactionHistory'
import { NewTransaction } from './components/NewTransaction'
import { GlobalContextProvider } from './contexts/GlobalState'
import { initializeNotification } from './services/firebase-service'

function App() {
  useEffect(() => {
    initializeNotification()
  })
  return (
    <GlobalContextProvider >
      <Header />
      <div className='container'>
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <NewTransaction />
      </div>
    </GlobalContextProvider>
  );
}

export default App;