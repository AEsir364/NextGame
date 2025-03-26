import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import styles from './Trailer.module.css';
import NaoEncontrada from 'pages/NaoEncontrada';
import db from 'db/db.json'; // Importando o JSON localmente

function Trailer() {
    const parametros = useParams();
    // Localiza o vídeo diretamente no arquivo JSON com base no parâmetro de ID
    const video = db.videos.find(video => video.id === parseInt(parametros.id));

    if (!video) {
        return <NaoEncontrada />;
    }

    return (
        <>
            <Banner imagem={video.banner} />
            <Titulo>
                <h1>Trailer de {video.titulo}</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </section>
            <Titulo>
                <h1>Uma breve análise de {video.titulo}</h1>
            </Titulo>
            <p>{video.analise}</p>
            <section className={styles.steamContainer}>
            <l className={styles.linkText}>
                Saiba mais sobre <strong>{video.titulo}</strong> na 
                <a href={video.steam} target="_blank" rel="noopener noreferrer"> Steam</a>.
            </l>
            </section>
        </>
    );
}

export default Trailer;
