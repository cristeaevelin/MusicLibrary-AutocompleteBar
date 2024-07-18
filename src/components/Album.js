// src/components/Album.js
import React from 'react';

const Album = ({ album, onSelectAlbum }) => {
  return (
    <li onClick={() => onSelectAlbum(album)}>
      {album.title}
    </li>
  );
};

export default Album;
