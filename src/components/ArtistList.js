// src/components/ArtistList.js
import React from 'react';
import Artist from './Artist';
import '../App.css';

const ArtistList = ({ artists, onSelectArtist }) => {
  return (
    <div>
      <h2>Artists</h2>
      <ul>
        {artists.map(artist => (
          <Artist key={artist.name} artist={artist} onSelectArtist={onSelectArtist} />
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
