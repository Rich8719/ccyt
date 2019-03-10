//function to strip youtube url and return only the id

function youTubeGetId(url) {
  url = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/)
  return undefined !== url[2] ? url[2].split(/[^0-9a-z_]/i)[0] : url[0]
}

module.exports = {
  youTubeGetId
}
