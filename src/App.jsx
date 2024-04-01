import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export default function App() {

  const[item, setItem] = useState([])

  const PegarDados = async () =>{
    const Dados = await axios.get("https://rickandmortyapi.com/api/character")
  
    setItem(Dados.data.results)
  }
 
  useEffect(()=>{
    PegarDados()
  },[])


  return (
   <>
   <h2>Bom dia!!</h2>
   <div>
    {item.map((item)=>(
      <figure>
        <img src={item.image} alt="" />
        <figcaption>{item.name}</figcaption>
        <h2>{item.species}</h2>
      </figure>
    ))}
   </div>
   </>
  )
}
