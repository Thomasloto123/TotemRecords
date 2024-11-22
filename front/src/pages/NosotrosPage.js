import React from "react";
import '../Styles/Components/Pages/NosotrosPage.css'

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>HISTORIA</h2>
                <p>Totem Records es un proyecto creado por un chico apasionado por la musica.Esta hecho para que las personas
                    disfruten de la musica. Especializado en el genero <b>'URBANO'</b>, No solo es un canal donde encontraras Beats para tus
                    canciones, en esta pagina se desborda todo el trabajo y la pasion que se le pone a cada instrumental. Espero 
                    que lo disfruten!, como disfrute hacer cada una de estas pistas!.
                </p>

            </div>
            <div className="staff">
                <h2>PRODUCTOR MUSICAL</h2>
                <div className="persona">
                    <img src="img/fotod de cvs.jpg" alt="Thomas" width="300"/>

                    <h5>Thomas Elias Loto</h5><br></br>
                    <h6>Productor Musical</h6>
                    <p>Criado en argentina, Nacido en buenos aires</p>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;