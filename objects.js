var playlist = { adele: "hello"};


function updatePlaylist(playlist, artistName, songTitle) {
  // return Object.assign({}, playlist, { [artistName]: songTitle })
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  return delete playlist.artistName;

}
