import React from "react";
import '../Styles/Components/Pages/HomePages.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <div>
                <img src="img/beat enigma.png" alt="foto de beat" width= '500'></img>
            </div>
            <div className="columnas">
                <div className="Bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Esta pagina esta dedicada a las personas que son apasionadas por la musica,
                        encontraras las mejores pistas para elevar tus canciones y llevarlas
                        al proximo nivel. no te quedes con las ganas de explashar tu arte.
                        Espero que lo disfruten!, hecho con amor, desde lo mejor, para lo mejor!
                        
                    </p>

                </div>
                <div className="testimonios">
                    <h2>testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Lo mejor que eh escuchado hace tiempo</span>
                        <span className="autor">Faustino Lopez</span>
                    </div>
                </div>
            </div>

        </main>
    );
}
export default HomePage;