import React, { useState, useEffect } from "react";
import { getAlbums } from "../data/albums_data.ts";
import { getImageURL } from "../utils/image_utils.ts";
import "./Music.css";

interface Album {
  folder: string;
  covers: string[];
  background: string;
  album_name: string;
  artist_name: string;
  release_date: string;
  link_genius: string;
}

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const Music: React.FC = () => {
  const [album, setAlbum] = useState<Album | null>(null);
  const [coverOrder, setCoverOrder] = useState<number[]>([]);

  const loadRandomAlbum = () => {
    const albums = getAlbums();
    if (albums.length > 0) {
      const randomAlbum = getRandomItem(albums);
      const folder = randomAlbum.folder;
      const covers = getImageURL(folder, true) as string[];

      setAlbum({
        folder,
        background: getImageURL(folder, false) as string,
        covers,
        album_name: randomAlbum.album_name,
        artist_name: randomAlbum.artist_name,
        release_date: randomAlbum.release_date,
        link_genius: randomAlbum.link_genius,
      });

      setCoverOrder([...Array(covers.length).keys()]);
    }
  };

  useEffect(() => {
    loadRandomAlbum();
  }, []);

  const handleCoverClick = (index: number) => {
    if (index === coverOrder[0]) {
      window.open(album?.link_genius, "_blank");
    } else {
      const newOrder = [index, ...coverOrder.filter(i => i !== index)];
      setCoverOrder(newOrder);
    }
  };

  if (!album) return <div>Loading...</div>;

  const displayedCovers = coverOrder.slice(0, 3);

  const baseShiftX = (displayedCovers.length - 1) * 1; // en vw
  const baseShiftY = (displayedCovers.length - 1) * 1; // en vw

  return (
    <div className="section music">
      <div className="music-background-container">
        {album.background && (
          <img src={album.background} alt="Background Music" className="music-background" />
        )}
      </div>
      <div className="music-content">
      <div
        className="cover-stack"
        style={{
          transform: `translate(${baseShiftX}vw, ${baseShiftY}vw)`,
          transition: "transform 0.4s ease",
        }}
      >
        <div className="cover-placeholder" />
        {displayedCovers.map((coverIndex) => {
          const cover = album.covers[coverIndex];
          return (
            <img
              key={coverIndex}
              src={cover}
              alt={`Cover ${coverIndex}`}
              className="music-cover stacked"
              onClick={() => handleCoverClick(coverIndex)}
            />
          );
        })}
      </div>

        <div className="music-text">
          <h1>{album.album_name}</h1>
          <h2>{album.artist_name}</h2>
          <h3>{album.release_date}</h3>
        </div>
      </div>
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
