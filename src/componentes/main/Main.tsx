import './Main.css'
import Filme from "../filme/Filme"
import React, { useState } from 'react'
type FilmesType = {
    id: number,
    titulo: string,
    sinopse: string,
    imagem: string
}

function Main(){
    //Hook
    const [texto,setTexto] = useState("")

    const filmes:FilmesType[] = [
        {
            id: 1,
            titulo:"Hazbin Hotel",
            sinopse:'A série segue Charlie Magne (Jill Harris), a princesa do Inferno, uma demônio carismática e herdeira do trono, enquanto se empenha em realizar seu sonho aparentemente impossível de abrir um hotel chamado "Happy Hotel", que visa reabilitar pecadores.',
            imagem:"/HAZBINHOTEL.jpg"
        },
        {
            id: 2,
            titulo:"Barbie",
            sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
            imagem:"/Barbie.jpg"
        }
]
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
        { filmes.filter((filme)=>filme.titulo.toLocaleLowerCase().includes(texto)).map((filme) => <Filme key = { filme.id } titulo={filme.titulo} sinopse={filme.sinopse} imagem={filme.imagem}/>) }        </main>
    </>
    )
}

export default Main