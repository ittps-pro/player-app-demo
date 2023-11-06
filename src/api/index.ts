const axios = require('axios')



const getPlayerState = (id: number) => {
  return axios.get('http://localhost:1337/players/' + id)
}