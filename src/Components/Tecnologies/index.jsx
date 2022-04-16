// Modules
import React, { useMemo } from 'react';

// Components
import Tabs from './Components/Tabs';

// Styles
import Styles from './Tecnologies.module.css';

const Tecnologies = () => {

    const headers = useMemo(() => ['Frontend', 'Backend', 'Tools', 'Metodologies'], []);
    const items = useMemo(() => [
        // Frontend
        [
            {img: 'https://lazonagamer.net/wp-content/uploads/2021/12/javascript-logo.png', title: 'Javascript', },
            {img: 'https://victorroblesweb.es/wp-content/uploads/2020/03/aprender-html-en-15-minutos.jpg', title: 'HTML5', },
            {img: 'https://victorroblesweb.es/wp-content/uploads/2020/03/Aprender-CSS-en-15-minutos.png', title: 'CCS3' },
            {img: 'https://learntechsystems.com/wp-content/uploads/2021/09/typescript.jpeg', title: 'Typescript'},
            {img: 'https://img.stackshare.io/service/7374/react-redux.png', title: 'Redux'},
            {img: 'https://www.digital55.com/wp-content/uploads/2019/07/%C2%BFQue%CC%81-cualidades-debe-tener-un-desarrollador-especialista-en-React.png', title: 'React'},
            {img: 'https://cms-assets.tutsplus.com/uploads/users/34/posts/22391/preview_image/angular-js-firebase.png', title: 'Angular'},
            {img: 'https://lh3.googleusercontent.com/WgTVt2TUmCDrJuhBVQi84ynGogOcDzzAwKrR4IUxObCoNd-VAVeRph3gQtlUEgYq2yj9OgwtsGw0ylIwigC66jHmy1I0oxJ3GbNaS1criuH6-ohZ39dnwLOdhAzYuqaR1OX5ln7n', title: 'Material UI'},
            {img: 'https://tailwindui.com/img/og-image.png', title: 'Tailwind'},
            {img: 'https://noviello.it/content/images/2020/05/nextjs.jpg', title: 'Next JS'},
            {img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--2YDn85zH--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/yabati9oa4prw7z2bn52.png', title: 'i18n'}

        ],
        // Backend
        [
            {img: 'https://folderit.net/wp-content/uploads/2016/01/nodejs-primeros-pasos.jpg', title: 'NodeJS'},
            {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAdEahe51EfF11pT4p79XaMJv5knNEl7NSN6PjbWNuxGTVk5tf-7mNO7KZi_XgIi849Po&usqp=CAU', title: 'Node Mailer'},
            {img: 'https://programacion.net/files/article/20160322050344_handlebars.jpg', title: 'Handlebars'},
            {img: 'https://www.joykal.com/wp-content/uploads/2019/09/mongodb.jpg', title: 'Mongo DB'},
            {img: 'https://miro.medium.com/max/406/0*MI6Cy_YYSexyhB6q', title: 'Rest API'},
            {img: 'https://i.postimg.cc/DyVz9FRV/firebase-logo.png', title: 'Firebase'},
            {img: 'https://www.freecodecamp.org/news/content/images/2021/10/golang.png', title: 'Golang'}
        ],
        // Tools
        [
            {img: 'https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2017/04/comandos-de-git.png', title: 'Git'},
            {img: 'https://global-uploads.webflow.com/5f5a53e153805db840dae2db/6073fbf151fa4565d48572dc_GitHub_aprender-programaci%25C3%25B3n.jpeg', title: 'Github'},
            {img: 'https://blog.underc0de.org/wp-content/uploads/2021/11/gitlab-blog-cover.png', title: 'Gitlab'},
            {img: 'https://i.ytimg.com/vi/BD8xfCILcBs/maxresdefault.jpg', title: 'Bitbucket'}

        ],
        // Metodologies
        [
            {img: 'https://geeks.ms/jorge/wp-content/uploads/sites/6/2007/05/20210927_01.png', title: 'Scrum'}
        ]
    ], []);

    return (
        <section className={[Styles.section].join(' ')}>
            <h2 className="intersection" data-id="2">Tecnologías</h2>
            <Tabs headers={headers} items={items} />
        </section>
    );
};

export default Tecnologies;