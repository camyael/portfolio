import send from '../../assets/img/portfolio/send.svg'

const Contact = () => {
    const handleSubmit = evt => {
        evt.preventdefault()
    }

    return (
        <section id="contact">
            <div className="figure_star"></div>
            <h3>Contacto</h3>
            <p>Para contactarme completa el formulario o envíame un correo - camilavillaverde3@gmail.com</p>
            <form className="contact_form" onSubmit={e => handleSubmit(e)}>
                <div className="contact_form_name">
                    <label>Nombre</label>
                    <input type='text' placeholder="Ingrese su nombre"/>
                </div>
                <div className="contact_form_mail">
                    <label>Email</label>
                    <input type="text" placeholder="Ingrese su correo electrónico"/>
                </div>
                <div className="contact_form_message">
                    <label>Mensaje</label>
                    <textarea type="text" placeholder="Escriba su mensaje"/>
                </div>
                <div className="contact_form_submit">
                    <input type="submit" value="Enviar"/>
                    <img src={send} alt="" srcset="" />
                </div>
            </form>
        </section>
    )
}

export default Contact;