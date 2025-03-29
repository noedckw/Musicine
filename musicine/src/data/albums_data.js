const data = [
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

const getAlbums = () => {
  return data;
}

export {getAlbums};