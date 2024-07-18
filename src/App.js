import React, { useState, useEffect } from 'react';
import ArtistList from './components/ArtistList';
import AlbumList from './components/AlbumList';
import SongList from './components/SongList';
import './App.css';
import Autocomplete from './components/Autocomplete';

const App = () => {
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data fetched:', data);
        setArtists(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSelectArtist = (artist) => {
    setSelectedArtist(artist);
    setSelectedAlbum(null); // <- aici resetezi albumul selectat
  };

  const handleSelectAlbum = (album) => {
    setSelectedAlbum(album);
  };

  return (
    <div className="full-width-height-div">
      <Autocomplete/>
      <h1 style={{ textAlign: 'center' }}>Music Library</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <ArtistList artists={artists} onSelectArtist={handleSelectArtist} />
        </div>
        <div style={{ flex: 2 }}>
          {selectedArtist && (
            <AlbumList albums={selectedArtist.albums} onSelectAlbum={handleSelectAlbum} />
          )}
        </div>
        <div style={{ flex: 2 }}>
          {selectedAlbum && (
            <>
              <h2>{selectedAlbum.title}</h2>
              <p>{selectedAlbum.description}</p>
              <SongList songs={selectedAlbum.songs} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;