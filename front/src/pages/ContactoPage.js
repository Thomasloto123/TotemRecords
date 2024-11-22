import React from "react";
import '../Styles/Components/Pages/ContactoPage.css'

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form className="formulario" action="" method="">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="telefono">telefono</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="mensaje">mensaje</label>
                        <textarea></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="enviar"/></p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>tambien puede comunicasrse por estas alternativas</p>
                <ul>
                    <li>Telefono:1130795467</li>
                    <li>Email:TotemRecords15@gmail.com</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Skype:</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;