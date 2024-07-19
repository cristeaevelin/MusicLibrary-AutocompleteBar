import React from 'react';
import Artist from './Artist';

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
