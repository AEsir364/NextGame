import styles from './Banner.module.css';
import { useState, useEffect } from 'react';

function Banner({ imagem, imagens = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (imagens.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === imagens.length - 1 ? 0 : prevIndex + 1
                );
            }, 10000); // Alterna a cada 10 segundos

            return () => clearInterval(interval);
        }
    }, [imagens]);

    const backgroundImage = imagens.length > 0 ? imagens[currentIndex] : imagem;

    return (
        <div
            className={styles.capa}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
    );
}

export default Banner;