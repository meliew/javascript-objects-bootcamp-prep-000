var playlist = { madonna: "like a prayer"};


function updatePlaylist(playlist, artist, song) {

  return playlist.assign({}, playlist, artist, song)

}
