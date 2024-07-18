// src/components/Artist.js
import React from 'react';

const Artist = ({ artist, onSelectArtist }) => {
  return (
    <li onClick={() => onSelectArtist(artist)}>
      {artist.name}
    </li>
  );
};

export default Artist;
