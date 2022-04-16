// Modules
import React, { useState } from 'react';

// Images and Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

// Styles
import Styles from './Contact.module.css';

const Contact = () => {

    const [email, setEmail] = useState({
        body: '',
        name: '',
        subject: '',
    });

    const handleChangeInputs = ({target: {name, value}}) => setEmail({...email, [name]: value});

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location = `mailto:johanssonstanleyr@gmail.com?Subject=${email.subject} | ${email.name}&Body=${email.body}`;
    };

    return (
        <section className={[Styles.section].join(' ')}>
            <h2 className="intersection" data-id="4">Contacto</h2>
            <div className={Styles.container}>
                <div>
                    <h3>Social Media</h3>
                    <div className={Styles.socialMedia}>
                        <a href="https://www.facebook.com/johanssonstanley.rodriguezcortez" target="_blank" rel="noreferrer">
                            <FacebookIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/johansson-rodriguez-70079818b" target="_blank" rel="noreferrer">
                            <LinkedInIcon />
                        </a>
                        <a href="https://www.instagram.com/stanley_crtz5/?hl=es" target="_blank" rel="noreferrer">
                            <InstagramIcon />
                        </a>
                        <a href="mailto:johanssonstanleyr@gmail.com" target="_blank" rel="noreferrer">
                            <EmailIcon />
                        </a>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <p>Enviame un correo.</p>
                    <input onChange={handleChangeInputs} value={email.name} type="text" name="name" placeholder="Name" />
                    <input onChange={handleChangeInputs} value={email.subject} type="text" name="subject" placeholder="Subject" />
                    <textarea onChange={handleChangeInputs} value={email.body} name="body" cols="30" rows="10" placeholder="Body" />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </section>
    );
};

export default Contact;