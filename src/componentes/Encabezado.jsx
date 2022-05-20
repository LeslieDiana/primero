import React from 'react'
import triangulo from '../images/triangulo.png'
import '../styles/Encabezado.css'
function Encabezado() {
  return (
    <div className='Inicio'>
      <div >
        <div className='Circulo'>1</div>
        <span className='T1'>Agenda/Topic</span>
      </div>
      <div>
        <span className='T2'>SAAS-0000</span>
        <img className='Logo' src={triangulo} alt="triangulo" />
      </div>
    </div>
  )
}

export default Encabezado

