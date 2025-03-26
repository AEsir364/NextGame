import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const [animando, setAnimando] = useState(false);
    
    const icone = ehFavorito ? iconeDesfavoritar : iconeFavoritar;

    const handleClick = () => {
        setAnimando(true);
        adicionarFavorito({ id, titulo, capa });

        setTimeout(() => {
            setAnimando(false);
        }, 300);
    };

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img 
                src={icone}
                alt="Favoritar filme"
                className={`${styles.favorito} ${animando ? styles.preenchendo : ''}`}
                onClick={handleClick}
            />
        </div>
    );
}

export default Card;
