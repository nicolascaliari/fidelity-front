import '../style/components/pages/ContactPage.css';
import { useState } from 'react';
import axios from 'axios';


function ContactPage() {
    const initialForm = {
        nombre:'',
        email:'',
        telefono:'',
        mensaje:''
    }

const [sending, setSending] = useState(false);
const [msg, setMsg] = useState('');
const [formData, setFormData] = useState(initialForm);


const handleChange = e => {
    const {name, value} = e.target;
    setFormData(oldData => ({
        ...oldData,
        [name]:value
    }))
  
}

const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setMsg(response.data.message);
    if(response.data.error === false) {
        setFormData(initialForm)
    }
}


    return (
      
        <div className='contenedor-contact' >
 
            <div className="div-container">
                <h2>¡Contáctanos!</h2>

                <div className="form-contacto">
                    <form action='/contacto' method='post' onSubmit={handleSubmit}>

                        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange}/>

                        <input type="email" name="email" placeholder="Correo" value={formData.email} onChange={handleChange} />

                        <input type="text" name="telefono" placeholder="Telefono"  value={formData.telefono} onChange={handleChange} />

                        <input type="text" name="mensaje" placeholder="Mensaje"  value={formData.mensaje} onChange={handleChange} />

                        <button>
                            Enviar
                        </button>

                    </form>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                </div>

            </div>
        </div>

    )
}

export default ContactPage;