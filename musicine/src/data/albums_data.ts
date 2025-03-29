// Définir un type pour l'album
interface Album {
  cover: string;
  background: string;
  album_name: string;
  artist_name: string;
  release_date: string;
  link_genius: string;
}

// Données des albums
const data: Album[] = [
  {
    cover: "i_am_music_cover.png",
    background: "i_am_music_background.jpg",
    album_name: "I AM MUSIC",
    artist_name: "PLAYBOI CARTI",
    release_date: "March 14, 2025",
    link_genius: "https://genius.com/albums/Playboi-carti/Music",
  },
  {
    cover: "gnx_cover.jpg",
    background: "gnx_background.png",
    album_name: "GNX",
    artist_name: "Kendrick Lamar",
    release_date: "November 22, 2024",
    link_genius: "https://genius.com/albums/Kendrick-lamar/Gnx",
  }
]

// Fonction pour récupérer les albums
const getAlbums = (): Album[] => {
  return data;
}

export { getAlbums };
