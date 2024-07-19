import React from 'react';

const SongList = ({ songs }) => {
  return (
    <div>
      <h2>Songs</h2>
      <ul>
        {songs.map(song => (
          <li key={song.title}>
            {song.title} ({song.length})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
