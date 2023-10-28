import React from "react";
import Card from "./Card";
import { contacts } from "../contacts"

const beyonce = contacts[0]
const jackBauer = contacts[1]
const chuckNorris = contacts[2]

function App() {
  return(
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={beyonce.name}
        img={beyonce.imgURL}
        tel={beyonce.phone}
        email={beyonce.email}
      />
      <Card
        name={jackBauer.name}
        img={jackBauer.imgURL}
        tel={jackBauer.phone}
        email={jackBauer.email}
      />
      <Card
        name={chuckNorris.name}
        img={chuckNorris.imgURL}
        tel={chuckNorris.phone}
        email={chuckNorris.email}
      />
    </div>
  )
}

export default App
