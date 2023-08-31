import './Filme.css'
type FilmeProps={
    titulo:string,
    sinopse:string,
    imagem:string
}

function Filme(props:FilmeProps){
    return(
        <>
        <div className="filmeContent">
            <img src={props.imagem} alt="" />
            <div className="texto">
                <h1>{props.titulo}</h1>
                <p>{props.sinopse}</p>
            </div>
        </div>
        </>
    )
}

export default Filme