import React, { useState, useEffect } from "react";
import { getAlbums } from "../data/albums_data.ts";
import { getImageURL } from "../utils/image_utils.ts";
import "./Music.css";

interface Album {
  cover: string;
  background: string;
  album_name: string;
  artist_name: string;
  release_date: string;
  link_genius: string;
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
      // On précise ici que randomAlbum est de type Album
      const randomAlbum = getRandomItem(albums); // Utilisation explicite du type Album
      setAlbum({
        background: getImageURL(randomAlbum.album_name, false),
        cover: getImageURL(randomAlbum.album_name, true),
        album_name: randomAlbum.album_name, // Utilisation du nom exact de la propriété 'name'
        artist_name: randomAlbum.artist_name, // Utilisation du nom exact de la propriété 'artist'
        release_date: randomAlbum.release_date, // Utilisation du nom exact de la propriété 'date'
        link_genius: randomAlbum.link_genius, // Utilisation du nom exact de la propriété 'link'
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
        <a href={album.link_genius} target="_blank" rel="noopener noreferrer">
          <img src={album.cover} alt="Album Cover" className="music-cover" />
        </a>
        )}
        <div className="music-text">
          <h1>{album.album_name}</h1>
          <h2>{album.artist_name}</h2>
          <h3>{album.release_date}</h3>
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
