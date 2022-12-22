import React from 'react'
import ResumeItem from '../ResumeItem/Index'
import * as C from './styles'
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from 'react-icons/fa'

const Resumo = ({income, expense, total}) => {
  return (
    <C.Container>
        <ResumeItem title='Entradas' Icon={FaRegArrowAltCircleUp} value={income}/>
        <ResumeItem title='Saidas' Icon={FaRegArrowAltCircleDown} value={expense}/>
        <ResumeItem title='Total' Icon={FaDollarSign} value={total}/>
    </C.Container>
  )
}

export default Resumo