import React, { useState, useEffect } from "react";
import { getAlbums } from "../data/albums_data.ts";
import { getImageURL } from "../utils/image_utils.ts";
import CoverViewer from "./CoverViewer";
import "./Music.css";
import videoLoop from "./../assets/see-next.mp4"

interface Album {
  folder: string;
  covers: string[];
  background: string;
  album_name: string;
  artist_name: string;
  release_date: string;
  link_genius: string;
}

const Music: React.FC = () => {
  const [album, setAlbum] = useState<Album | null>(null);
  const [coverOrder, setCoverOrder] = useState<number[]>([]);
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState<number | null>(null);
  const [albumLoaded, setAlbumLoaded] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState(false);


  const loadRandomAlbum = () => {
    const albums = getAlbums();
    if (albums.length > 0) {
      let randomIndex: number;

      if (albums.length > 1 && currentAlbumIndex !== null) {
        do {
          randomIndex = Math.floor(Math.random() * albums.length);
        } while (randomIndex === currentAlbumIndex);
      } else {
        randomIndex = Math.floor(Math.random() * albums.length);
      }

      const randomAlbum = albums[randomIndex];
      const folder = randomAlbum.folder;
      const covers = getImageURL(folder, true) as string[];

      setAlbumLoaded(false);
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
      setCurrentAlbumIndex(randomIndex);
    }
  };

  const handleBackgroundLoad = () => {
    setTimeout(() => {
      setAlbumLoaded(true);
    }, 100);
  };

  useEffect(() => {
    loadRandomAlbum();
  }, []);

  const handleCoverClick = (index: number) => {
    if (index === coverOrder[0]) {
      setIsPopupOpen(true);
      setPopupIndex(index);
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
      <div key={album.folder} className={`music-background-container ${albumLoaded ? "loaded" : ""}`}>
        {album.background && (
          <img
            src={album.background}
            alt="Background Music"
            className="music-background"
            onLoad={handleBackgroundLoad}
          />
        )}
      </div>

      <div key={album.folder + "-content"} className={`music-content ${albumLoaded ? "loaded" : ""}`}>
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

        <div className={`music-text ${albumLoaded ? "loaded" : ""}`}>
          <h1>{album.album_name}</h1>
          <h2>{album.artist_name}</h2>
          <h3>{album.release_date}</h3>
        </div>
      </div>

      <div className="description">
        <h1>my collections of albums.</h1>
        <div
          className={`video-trigger ${isClicked ? "clicked" : ""}`}
          onClick={() => {
            setIsClicked(true);
            loadRandomAlbum();
            setTimeout(() => setIsClicked(false), 300); // Durée de l'animation
          }}
        >
          <video
            src={videoLoop}
            muted
            loop
            autoPlay
            playsInline
            className="trigger-video"
          />
        </div>

      </div>

      {isPopupOpen && popupIndex !== null && album && (
        <CoverViewer
          covers={album.covers}
          index={popupIndex}
          geniusLink={album.link_genius}
          onClose={() => setIsPopupOpen(false)}
          onNext={() =>
            setPopupIndex((prev) =>
              prev !== null && prev < album.covers.length - 1 ? prev + 1 : prev
            )
          }
          onPrev={() =>
            setPopupIndex((prev) =>
              prev !== null && prev > 0 ? prev - 1 : prev
            )
          }
        />
)}

    </div>
  );
};

export default Music;
