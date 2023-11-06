export default function getData(ctx:any) {
    const { data } = await axios({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/charizard",
    })
    return data.species
}