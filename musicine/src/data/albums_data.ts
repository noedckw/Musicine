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
    cover: "i_am_music.png",
    background: "i_am_music.jpg",
    album_name: "I AM MUSIC",
    artist_name: "PLAYBOI CARTI",
    release_date: "March 14, 2025",
    link_genius: "https://genius.com/albums/Playboi-carti/Music",
  },
  {
    cover: "gnx.jpg",
    background: "gnx.png",
    album_name: "GNX",
    artist_name: "Kendrick Lamar",
    release_date: "November 22, 2024",
    link_genius: "https://genius.com/albums/Kendrick-lamar/Gnx",
  },
  {
    cover: "my_beautiful_dark_twisted_fantasy.jpg",
    background: "my_beautiful_dark_twisted_fantasy.png",
    album_name: "My Beautiful Dark Twisted Fantasy",
    artist_name: "Kanye West",
    release_date: "November 22, 2010",
    link_genius: "https://genius.com/albums/Kanye-west/My-beautiful-dark-twisted-fantasy",
  }
]

// Fonction pour récupérer les albums
const getAlbums = (): Album[] => {
  return data;
}

export { getAlbums };
