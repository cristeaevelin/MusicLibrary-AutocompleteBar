import React from 'react';
import Album from './Album';

const AlbumList = ({ albums, onSelectAlbum }) => {
  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
          <Album key={album.title} album={album} onSelectAlbum={onSelectAlbum} />
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
