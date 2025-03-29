import React, { useState, useEffect } from "react";
import { getAlbums } from "./../data/albums_data";
import { getImageURL } from "./../utils/image_utils.js";
import "./Music.css";

interface Album {
  background: string;
  cover: string;
  name: string;
  artist: string;
  date: string;
  link: string;
}

// Fonction pour obtenir un album aléatoire
function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const Music: React.FC = () => {
  const [album, setAlbum] = useState<Album | null>(null);

  // Charger un album aléatoire à chaque fois que l'album change
  const loadRandomAlbum = () => {
    const albums = getAlbums();
    if (albums.length > 0) {
      const randomAlbum = getRandomItem(albums);
      setAlbum({
        background: getImageURL(randomAlbum.background),
        cover: getImageURL(randomAlbum.cover),
        name: randomAlbum.album_name,
        artist: randomAlbum.artist_name,
        date: randomAlbum.release_date,
        link: randomAlbum.link_genius,
      });
    }
  };

  useEffect(() => {
    loadRandomAlbum();
  }, []);

  if (!album) return <div>Loading...</div>;

  return (
    <div className="section music">
      {/* Background image aligné à droite */}
      <div className="music-background-container">
        {album.background && (
          <img src={album.background} alt="Background Music" className="music-background" />
        )}
      </div>
      {/* Contenu aligné à gauche */}
      <div className="music-content">
        {album.cover && (
        <a href={album.link} target="_blank" rel="noopener noreferrer">
          <img src={album.cover} alt="Album Cover" className="music-cover" />
        </a>
        )}
        <div className="music-text">
          <h1>{album.name}</h1>
          <h2>{album.artist}</h2>
          <h3>{album.date}</h3>
        </div>
      </div>
      {/* Ajouter un bouton juste au-dessus de la description */}

      <div className="description">
        <h1>my collections of albums.</h1>
        <div className="loading-button" role="button" onClick={loadRandomAlbum}>
          <div className="button_top">see next.</div>
        </div>
      </div>
    </div>
  );
};

export default Music;
