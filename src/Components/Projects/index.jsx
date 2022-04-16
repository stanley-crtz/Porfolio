// Modules
import React from 'react';

// Components
import Card from './Components/Card';

// Images
import Vobox from 'Styles/Images/VoboxES.png';
import WakaiOtaku from 'Styles/Images/WakaiOtaku.png';

// Styles
import Styles from './Projects.module.css';

const Projects = () => {
    return (
        <section className={Styles.section}>
            <h2>Projects</h2>
            <div className={Styles.cards}>
                <Card
                    title="SRPD"
                    description="En el Salvador no existe ningun sistema en el cual se lleve un registro profesional en el area de docentes, fue asi que surgio el proyecto SRPD (Sistema de Registro Profesional Docente), en el cual se trata de crear un portal en donde esten registrados todos los docentes del area de oriente. En este podran entablar una comunicacion directa con el MINED en un apartado denominado Bandeja y otro apartado el cual se le llamo Foro que se utiliza para realizar publicaciones y comentar las publicaciones de otro docente."
                    img="https://res.cloudinary.com/dxmkfwigq/image/upload/v1613662731/Portafolio/SRPD_f1wtgy.png"
                    chips={['React', 'NodeJS', 'MongoDB', 'NodeMailer', 'Express', 'Handlebars']}
                />
                <Card
                    title="ISO25010"
                    description="Este proyecto surgio de algo muy tedioso, que era el de estar realizando las evaluaciones de nuestra apliacion web (SRPD) utilizando las normas ISO25010 y llevando todo en una hoja de texto o de calculo, por ende empezamos el proyecto ISO25010 en el cual se encuentran las diferentes caracteristicas de la normativa ISO25010 en donde solo se tendran que ingresar las HU o Epopeyas en donde corresponda."
                    img="https://res.cloudinary.com/dxmkfwigq/image/upload/v1613662726/Portafolio/ISO25010_raizaj.png"
                    chips={['React', 'Firebase', 'Firebase Hosting', 'Material UI']}
                />
                <Card
                    title="VoBox ES"
                    description="Vobox ES es una plataforma pensada para las personas que ejercen voluntariados en El Salvador, evitando molestos viajes para inscribirse a alguna actividad de voluntariado. En Vobox se cuenta con un apartado de chat donde se agregan personas que estaran en una actividad, podiendo realizar chats y registrar las actividades en un calendario estilo Google Calendar donde se le notificara a los miembros del grupo la proxima actividad, contando tambien con un mapa donde se registra la direccion de dicha actividad."
                    img={Vobox}
                    chips={['React', 'Firebase', 'Material UI']}
                />
                <Card
                    title="Wakai Otaku"
                    description="Wakai Otaku es una plataforma para ver los proximos animes que saldran por temporada, esta aplicación se realizo como ejercicio de una instructoria que se impartio a los estudiantes de nuevo ingreso de mi facultad"
                    img={WakaiOtaku}
                    chips={['Angular', 'React', 'Firebase', 'Anime Api']}
                />
            </div>
        </section>
    );
};

export default Projects;