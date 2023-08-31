import './Main.css'
import Filme from "../filme/Filme"

function Main(){
    return(
        <main>
            <Filme  
                titulo="Barbie" 
                sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.' 
                imagem="/Barbie.jpg"
            />
                    
            <Filme 
                titulo="Hazbin Hotel" 
                sinopse=' série segue Charlie Magne (Jill Harris), a princesa do Inferno, uma demônio carismática e herdeira do trono, enquanto se empenha em realizar seu sonho aparentemente impossível de abrir um hotel chamado "Happy Hotel", que visa reabilitar pecadores.' 
                imagem="/HAZBINHOTEL.jpg"            
            />
        </main>
    )
}

export default Main