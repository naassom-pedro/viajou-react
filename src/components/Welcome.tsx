import '../../src/style.css'

export function Welcome(){
    return (
        <main id="home">
            <video src="./src/assets/vid/vd-home.mp4" muted autoPlay loop></video>
            <div id="txt-home">
                <h2>Dê asas a sua imaginação!</h2>
                <p>Você escolhe para onde quer ir, e nós cuidaremos do resto. São diversos destinos que você pode chegar.
                </p>

                <form id="buscar">
                    <input type="text" placeholder="Digite o seu destino aqui..."/>
                    <button type="submit">Buscar</button>
                </form>
            </div>
         </main>
    )
}