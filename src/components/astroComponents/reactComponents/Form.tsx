import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./form.css";

function Form() {
    const [formData, setFormData] = useState({
        email: '',
        nombre: '',
        mensaje: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Envía el correo
        emailjs.send('service_awtet5h', 'template_ljywhz2', formData, 'nBVWMLvpt_Cq7c7QN')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Correo enviado con éxito');
                window.alert('Correo enviado con éxito')
            }, (err) => {
                console.log('FAILED...', err);
                alert('Error al enviar el correo');
                window.alert('Error al enviar el correo');
            });

        // Reinicia el formulario
        setFormData({
            email: '',
            nombre: '',
            mensaje: ''
        });
    };

    return (
        <div className="contactForm">
            <form onSubmit={handleSubmit}>
                <input
                    className="email"
                    type="email"
                    placeholder="correo"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    className="nombre"
                    type="text"
                    placeholder="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
                <textarea
                    className="mensaje"
                    placeholder="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                />
                <input className="submit" type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default Form;
