import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from './Inicio.module.css';
import db from "db/db.json";

function Inicio() {
    const videos = db.videos;

    return (
        <>
            <Banner imagens={videos.map(video => video.banner)} />
            <Titulo>
                <h1>Descubra seu próximo jogo favorito!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => (
                    <Card {...video} key={video.id} />
                ))}
            </section>
        </>
    );
}

export default Inicio;