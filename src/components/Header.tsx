import '../../src/style.css'

export function Header(){
    return (
        <header>
             <div className="logo">
                 <h1>Viajou</h1>
             </div>
            <nav>
                <ul>
                    <li><a href="./index.html">home</a></li>
                    <li><a href="./destinos.html">destino</a></li>
                    <li><a href="./promocoes.html">promoções</a></li>
                    <li><a href="./contato.html">contato</a></li>
                </ul>
            </nav>
        </header>
    );
}