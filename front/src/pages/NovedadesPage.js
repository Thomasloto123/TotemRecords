import { useState, useEffect } from "react";
import axios from 'axios';
import Novedaditem from "../Styles/Components/novedades/Novedaditem";

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);
    return (
        <section className="holder" >
            <h2>Novedades</h2>
            {
                loading ? (
                    <p>cargando...</p>
                ) : (
                    novedades.map(item => <Novedaditem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                        imagen={item.imagen} body={item.cuerpo} />)
                )
            }
        </section >
    )
};


export default NovedadesPage;