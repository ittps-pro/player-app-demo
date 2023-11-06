import { Button } from "antd-mobile";
import { useState, useLayoutEffect, useEffect } from 'react'



async getPlayers(ctx:any) => {

let {data} = await axios.get('http://localhost:1337/api/players')

console.log(data)
  return data
}


export default function Player() {

// player
  const [player, setPlayer] = useState(player)
  return (
    <div className="Player">
      <h1>Player Control</h1>

    </div>
  );



  
}