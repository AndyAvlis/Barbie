import './Main.css'
import Filme from "../filme/Filme"
import React, { useEffect, useState } from 'react'
type FilmesType = {
    _id: number,
    titulo: string,
    descricao: string,
    imagem: string
}

function Main(){

    const url = "http://localhost:3000/filmes"    
    const [filmes,setDados] = useState<FilmesType[]>([])

    useEffect(()=>{
        fetch(url, {method:"GET"})
        .then((resposta)=>resposta.json())
        .then((json)=>setDados(json))
    },[])

    //Hook
    const [texto,setTexto] = useState("")

//     const filmes:FilmesType[] = [
//         {
//             id: 1,
//             titulo:"Hazbin Hotel",
//             sinopse:'A série segue Charlie Magne (Jill Harris), a princesa do Inferno, uma demônio carismática e herdeira do trono, enquanto se empenha em realizar seu sonho aparentemente impossível de abrir um hotel chamado "Happy Hotel", que visa reabilitar pecadores.',
//             imagem:"/HAZBINHOTEL.jpg"
//         },
//         {
//             id: 2,
//             titulo:"Barbie",
//             sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
//             imagem:"/Barbie.jpg"
//         }
// ]
    //A função recebe um atributo chamado "event"
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
    }
    

    return(
    <>
        <div className="pesquisa">
            <input className='barraPesquisa' type="text" onChange={mudaTexto} />
                <div>
                    <p className='texto_digitado'>pesquisa:{texto}</p>
                </div>
        </div>
        
        <main className="content-main">
        { filmes.filter((filme)=>filme.titulo.toLocaleLowerCase().includes(texto)).map((filme) => <Filme key = { filme._id } titulo={filme.titulo} sinopse={filme.descricao} imagem={filme.imagem}/>) }        </main>
    </>
    )
}

export default Main