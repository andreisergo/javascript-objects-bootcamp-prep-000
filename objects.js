var playlist = {
  DaftPunk: "Motherboard"
}

function updatePlaylist(playlist, artist, title) {
  playlist = playlist.artist = "title"
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist
}