import React, { useState, useEffect } from "react";
import data from "./../data/albums_data.json";

interface Album {
  background: string;
  cover: string;
  text: string;
}

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const Music: React.FC = () => {
  const [album, setAlbum] = useState<Album | null>(null);

  useEffect(() => {
    setAlbum(getRandomItem(data.albums));
  }, []);

  if (!album) return <div>Loading...</div>;

  return (
    <div className="section music">
      {/* Utilisation du chemin relatif pour charger l'image */}
      <img
        src={album.cover}  // Cela va automatiquement charger l'image à partir du chemin que tu as défini dans ton JSON
        alt="Album Cover"
        style={{ width: "150px", height: "150px", objectFit: "contain" }} // Taille petite pour tester
      />
      <h1>{album.text}</h1>
    </div>
  );
};

export default Music;
