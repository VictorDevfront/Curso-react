import React, {useState, useEffect} from 'react'
import './App.css'

export default function App() {

  localStorage.setItem("nome", "Victor")
  localStorage.getItem("nome")
  localStorage.removeItem("nome")

  const [contagem,setContagem]=useState(0)

  useEffect(
()=>{
  console.log("Página carregada")
  document.title='Contagem'+contagem
}
  )


  const textoDestaque={
    color:'#00f',
    fontSize:'3em'
  }

const [log,setLog]=useState(false)

const msglogin=()=>{
  return 'Usúario Logado'
}

const msglogoff=()=>{
  return 'Favor logar'
}

  const cumprimento=()=>{
    const hora= new Date().getHours()
    if(hora >=0 && hora < 13) {
      return <p>Bom dia!</p>
    }else if(hora >=13 && hora < 18){
      return <p>Boa tarde!</p>
    }else{
      return <p>Boa noite!</p>
    }
  }


  
  const [nome, setNome]=useState('')

  return (
    <>
    <section className='caixa'>
    <h1 style={{color: '#f00', fontSize:'4em'}}> Curso </h1>
    <h2 style={textoDestaque}>Curso de React</h2>
    <p className='texto'> Se inscreva em nosso canal e nos siga no instagram</p>
    <p className='texto2'>Texto dois testando sozinho</p>
    </section>
    {cumprimento()}
    <p>{log?msglogin():msglogoff()}</p>
    <button onClick={()=>setLog(!log)}>{log?'Logoff':'Login'}</button>
    <br />
    <label>Digite seu Nome:</label>
    <input 
      type='text' 
      name="fnome"
      value={nome}
      onChange={(e)=>setNome(e.target.value)}
     />
    <p>Nome digitado:{nome}</p>
    <p>Contagem:{contagem}</p>
    <button onClick={()=>setContagem(contagem)}>Contar</button>

    </>
  );
}