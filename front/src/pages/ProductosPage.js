import React from "react";
import '../Styles/Components/Pages/ProductosPage.css'

const ProductosPage = (props) => {
    return (
        <>
            <div className="contenedor">
                <div className="video">

                    
                    <h1>El As</h1>
                    <h4>Reggaeton Beat</h4>
                    <h3>$10USD </h3>
                    <input type="submit" value="Comprar"/>
                    <video src="El As Beat YT.mp4" poster="img/RASTA 1.png" controls></video>
                    
                </div>
                <div className="video2">
                    
                    <h1>Gold Beat</h1>
                    <h4>Trap Beat</h4>
                    <h3>$15USD </h3>
                    <input type="submit" value="Comprar"/>
                    <video src="Gold Beat YT.mp4" poster="img/beat enigma.png" controls></video>
                    
                </div>
                <div className="video3">
                    <h1>Smokin Haze</h1>
                    <h4>Trap Beat</h4>
                    <h3>$15USD </h3>
                    <input type="submit" value="Comprar"/>
                     <video src="Smoking Haze Beat YT.mp4" poster="img/bender.png" controls></video>
                </div>
            </div>


        </>
    );
}

export default ProductosPage;