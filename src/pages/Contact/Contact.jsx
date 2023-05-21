import send from '../../assets/img/portfolio/send.svg';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, evt.target, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <section id="contact">
            <div className="figure_star"></div>
            <h3>Contacto</h3>
            <p>Para contactarme vía mail completa el formulario o envíame un correo - camilavillaverde3@gmail.com</p>
            <form className="contact_form" onSubmit={e => handleSubmit(e)}>
                <div className="contact_form_name">
                    <label>Nombre</label>
                    <input type='text' name='from_name' placeholder="Ingrese su nombre"/>
                </div>
                <div className="contact_form_mail">
                    <label>Email</label>
                    <input type="text" name='from_mail' placeholder="Ingrese su correo electrónico"/>
                </div>
                <div className="contact_form_message">
                    <label>Mensaje</label>
                    <textarea type="text" name='message' placeholder="Escriba su mensaje"/>
                </div>
                <div className="contact_form_submit">
                    <img src={send} alt="" />
                    <input type="submit" value="Enviar"/>
                </div>
            </form>
        </section>
    )
}

export default Contact;