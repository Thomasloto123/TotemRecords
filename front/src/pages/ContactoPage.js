import React from "react";
import '../Styles/Components/Pages/ContactoPage.css'
import { useState } from "react";
import axios from 'axios';

const ContactoPage = (props) => {

    const initialforce = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialforce);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialforce)
        }
    }

    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario" >
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange = {handleChange}/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange = {handleChange}/>
                    </p>
                    <p>
                        <label for="telefono">telefono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange = {handleChange}/>
                    </p>
                    <p>
                        <label for="mensaje">mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange = {handleChange}></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="enviar"/></p>
                </form>


                {sending ? <p>Enviando...</p>: null}
                {msg ? <p>{msg}</p>: null}


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