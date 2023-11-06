'use client'

import React, { useState } from "react";
import { Button } from "antd-mobile";


const getPlayerState = (id: number) => {
  return axios.get('http://localhost:1337/players/' + id)
}
const getItems = (id: number) => {
  return axios.get('http://localhost:1337/players/' + id)
}



export default function App() {
  return (
    <div className="App">
      <h1>Hello Antd Mobile</h1>
      <Button>PlayPause</Button>

    </div>

<div>

</div>
  );
}
