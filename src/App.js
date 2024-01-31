import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer = ({ playlist }) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef();

  const playNextTrack = () => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % playlist.length);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentTrack]);

  return (
    <div>
      <h2>Now Playing: {playlist[currentTrack]}</h2>
      <audio
        controls
        ref={audioRef}
        onEnded={playNextTrack}
        src={playlist[currentTrack]}
      />
      <h3>Playlist</h3>
      <ul>
        {playlist.map((track, index) => (
          <li key={index}>{track}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const playlist = [
    'path/to/audio1.mp3',
    'path/to/audio2.mp3',
    'path/to/audio3.mp3',
  ];

  return (
    <div>
      <h1>React Audio Player</h1>
      <AudioPlayer playlist={playlist} />
    </div>
  );
};

export default App;
