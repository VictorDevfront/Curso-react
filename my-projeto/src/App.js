import React from 'react'
import Relogio from './componentes/Relogio'
import './App.css'

export default function App() {

  const textoDestaque={
    color:'#00f',
    fontSize:'3em'
  }


  return (
    <>
    <section className='caixa'>
      <Relogio />
    <h1 style={{color: '#f00', fontSize:'4em'}}> Curso </h1>
    <h2 style={textoDestaque}>Curso de React</h2>
    <p className='texto'> Se inscreva em nosso canal e nos siga no instagram</p>
    <p className='texto2'>Texto dois testando sozinho</p>
    </section>
  
    </>
)
}
