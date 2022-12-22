import React, { useState, useEffect } from 'react'
import GlobalStyle from './styles/global'
import Header from './components/Header/Header'
import Resumo from './components/Resumo/Index'
import Form from './components/Form/Index'

export const App = () => {

    const data = localStorage.getItem("transactions")
    const [transectionsList, setTransectionsList] = useState(
        data ? JSON.parse(data) : []
    )

    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const amountExpense = transectionsList.filter((item) => item.expense)
            .map((transaction) => Number(transaction.amount))

        const amountIncome = transectionsList.filter((item) => !item.expense)
            .map((transaction) => Number(transaction.amount))

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2)
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2)

        const total = Math.abs(income - expense).toFixed(2)

        setIncome(`R$ ${income}`)
        setExpense(`R$ ${expense}`)
        setTotal(`${Number(income) < Number(expense) ? "-" : ""} R$ ${total}`)

    }, [transectionsList])

    const handleAdd = (transaction) => {
        const newArrayTransactions = [...transectionsList, transaction]

        setTransectionsList(newArrayTransactions)

        localStorage.setItem("transactions", JSON.stringify(newArrayTransactions))
    }

    return (
        <>
            <Header />
            <Resumo income={income} expense={expense} total={total} />
            <Form handleAdd={handleAdd} transectionsList={transectionsList} setTransectionsList={setTransectionsList} />
            <GlobalStyle />
        </>
    )
}

export default App