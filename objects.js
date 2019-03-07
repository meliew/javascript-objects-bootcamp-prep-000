var playlist = { madonna: "like a prayer"};


function updatePlaylist(playlist, artistName, songTitle) {

  return Object.assign({}, playlist, { [artistName]: songTitle })

}
