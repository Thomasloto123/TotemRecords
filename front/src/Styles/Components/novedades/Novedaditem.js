import React from 'react';

const Novedaditem = (Props) => {
    const {title, subtitle, imagen, body} = Props;

    return (
        <div className="novedades">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <img src={imagen} />
        <div dangerouslySetInnerHTML={{__html: body}}></div>
        <hr/>
      </div>
    )};


export default Novedaditem;