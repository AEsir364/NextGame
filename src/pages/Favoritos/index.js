import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Favoritos.module.css';
import db from "db/db.json"; // Importando o JSON localmente

function Favoritos() {
    const { favorito } = useFavoritoContext();
    const videos = db.videos; // Acessando a lista de vídeos diretamente do arquivo JSON

    return (
        <>
           <Banner imagens={videos.map(video => video.banner)} />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    );
}

export default Favoritos;