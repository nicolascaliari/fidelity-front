import '../../style/components/pages/Novedades.css'

const NovedadItem = (props) => {
    const {title, subtitle, imagen, body} = props;

    return (
        <div className="novedades">
            <h1 className="titulo">{title}</h1>
            <h2 className="subtitulo">{subtitle}</h2>
            <img className="img" src={imagen} alt="pepe" />
            <div className="body" dangerouslySetInnerHTML={{ __html:body}} /> 
            <hr />
        
        </div>
    );
}


export default NovedadItem;