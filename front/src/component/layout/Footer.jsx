import '../../style/components/layout/Footer.css';


function Footer() {
    return (


        <div className="contenedor-footer">
            <div className='fidelity-footer-h2'>
                <h2>
                    <strong className="strong-footer">FIDELITY CODE </strong> <br />
                    DESARROLLO WEB
                </h2>
            </div>

            <div className="div-footer-span">
                <h3>Contacto</h3>
                <span className="span-contacto">Buenos Aires, Argentina <br /></span>
                <span className="span-contacto"> +54 1130092810 <br /></span>
                <span className="span-contacto">Fidelitycode.developers@gmail.com</span>
            </div>
        </div>

    )
}

export default Footer;