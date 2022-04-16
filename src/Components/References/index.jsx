// Modules
import React from 'react';

// Components
import Card from './Components/Card';

// Styles
import Styles from './References.module.css';

const References = () => {
    return (
        <section className={Styles.section}>
            <h2>Testimonials</h2>
            <div className={Styles.cards}>
                <Card
                    name="Douglas Hernandez"
                    profile="https://scontent.fsal3-1.fna.fbcdn.net/v/t1.6435-9/44535072_1103779209799925_458367950735278080_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=83RsmoLGf94AX9hDb10&tn=b5EfEqiGoMlAFsR6&_nc_ht=scontent.fsal3-1.fna&oh=00_AT96uCiORTsPQocvRIySvPPcElwOXqexZ7w_KAf05GU6FA&oe=627E4094"
                    job="Frontend Development"
                    testimonial="Johasson siempre se ha caracterizado por ser muy aplicado y aprender cada dia mas, actualizarse sobre las nuevas tecnologias, estar al dia con las novedades de todos los frameworks y herramientas que usamos en nuestro dia a dia. Posee  un gran conocimiento tecnico, ademas que siempre esta dispuesto a compartir sus  conocimientos con los demas miembros del equipo y enseñarles de manera muy agradable las mejores practicas a la hora de desarrollar. Siempre esta dispuesto a ayudar y a colaborar con el equipo para encontrar la mejor solucion."
                />
                <Card
                    name="Josue Aparicio"
                    profile="https://scontent.fsal3-1.fna.fbcdn.net/v/t39.30808-6/272075120_2089620781195868_7557173066491340453_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=8pOoof-vbwgAX-nuvCS&_nc_ht=scontent.fsal3-1.fna&oh=00_AT9TscYiuK2ChrB78L_O12ZXfA2vJdoSe1sMqzlqCLVUNQ&oe=625F4685"
                    job="Frontend Development"
                    testimonial="Johan es un desarrollador fuera de serie, es el mejor en lo que hace y puede resolver cualquier problema que se proponga, independientemente de su dificultad. Tiene una capacidad impresionante de compartir fácilmente sus conocimientos con otros y vuelve ameno el espacio de trabajo en el que está. En el tiempo que compartí con él en el trabajo, me enseñó muchas cosas y siempre estuvo dispuesto a aprender también de mí."
                />
            </div>
        </section>
    );
};

export default References;