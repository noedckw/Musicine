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
  },
  {
    cover: "quaranta.jpg",
    background: "quaranta.jpg",
    album_name: "Quaranta",
    artist_name: "Danny Brown",
    release_date: "November 17, 2023",
    link_genius: "https://genius.com/albums/Danny-brown/Quaranta",
  },
  {
    cover: "life_of_pablo.jpg",
    background: "life_of_pablo.png",
    album_name: "The Life of Pablo",
    artist_name: "Kanye West",
    release_date: "February 14, 2016",
    link_genius: "https://genius.com/albums/Kanye-west/The-life-of-pablo",
  },
  {
    cover: "chromakopia.jpg",
    background: "chromakopia.jpg",
    album_name: "CHROMAKOPIA",
    artist_name: "Tyler, The Creator",
    release_date: "October 28, 2024",
    link_genius: "https://genius.com/albums/Tyler-the-creator/Chromakopia",
  },
  {
    cover: "donda.jpg",
    background: "donda.png",
    album_name: "Donda",
    artist_name: "Kanye West",
    release_date: "August 29, 2021",
    link_genius: "https://genius.com/albums/Kanye-west/Donda",
  }
]

// Fonction pour récupérer les albums
const getAlbums = (): Album[] => {
  return data;
}

export { getAlbums };
