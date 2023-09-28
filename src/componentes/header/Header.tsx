import "./Header.css"
import { Link } from "react-router-dom"

function Header(){
    return(
        <header>
            <div className="logo">
                <Link to="/logo">BARBIE</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="/sobre">Sobre</a>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <a href="/noticias">Noticias</a>
                        <Link to="/noticias">Noticias</Link>
                    </li>
                    <li>
                        <a href="/contato">Contato</a>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header