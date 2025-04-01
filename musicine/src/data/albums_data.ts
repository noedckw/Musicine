// Définir un type pour l'album
interface Album {
  album_name: string;
  artist_name: string;
  release_date: string;
  link_genius: string;
}

// Données des albums
const data: Album[] = [
  {
    album_name: "I AM MUSIC",
    artist_name: "PLAYBOI CARTI",
    release_date: "March 14, 2025",
    link_genius: "https://genius.com/albums/Playboi-carti/Music",
  },
  {
    album_name: "GNX",
    artist_name: "Kendrick Lamar",
    release_date: "November 22, 2024",
    link_genius: "https://genius.com/albums/Kendrick-lamar/Gnx",
  },
  {
    album_name: "My Beautiful Dark Twisted Fantasy",
    artist_name: "Kanye West",
    release_date: "November 22, 2010",
    link_genius: "https://genius.com/albums/Kanye-west/My-beautiful-dark-twisted-fantasy",
  },
  {
    album_name: "Quaranta",
    artist_name: "Danny Brown",
    release_date: "November 17, 2023",
    link_genius: "https://genius.com/albums/Danny-brown/Quaranta",
  },
  {
    album_name: "The Life of Pablo",
    artist_name: "Kanye West",
    release_date: "February 14, 2016",
    link_genius: "https://genius.com/albums/Kanye-west/The-life-of-pablo",
  },
  {
    album_name: "CHROMAKOPIA",
    artist_name: "Tyler, The Creator",
    release_date: "October 28, 2024",
    link_genius: "https://genius.com/albums/Tyler-the-creator/Chromakopia",
  },
  {
    album_name: "Donda",
    artist_name: "Kanye West",
    release_date: "August 29, 2021",
    link_genius: "https://genius.com/albums/Kanye-west/Donda",
  },
  {
    album_name: "Watch the Throne",
    artist_name: "JAY-Z & Kanye West",
    release_date: "August 8, 2011",
    link_genius: "https://genius.com/albums/Jay-z-and-kanye-west/Watch-the-throne",
  },
  {
    album_name: "“Awaken, My Love!”",
    artist_name: "Childish Gambino",
    release_date: "December 2, 2016",
    link_genius: "https://genius.com/albums/Childish-gambino/Awaken-my-love",
  },
  {
    album_name: "Gemini Rights",
    artist_name: "Steve Lacy",
    release_date: "July 15, 2022",
    link_genius: "https://genius.com/albums/Steve-lacy/Gemini-rights",
  }
]

// Fonction pour récupérer les albums
const getAlbums = (): Album[] => {
  return data;
}

export { getAlbums };
