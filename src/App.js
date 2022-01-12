import React, { useState } from "react"
import Button from "./components/Button"
import Position from "./components/Position"

import { nanoid } from "nanoid"

export default function App() {
  const [positions, setPositions] = useState([
    {
      id: nanoid(15),
    },
  ])

  const removePosition = id => {
    setPositions(positions.filter(e => e.id != id))
  }

  const addPosition = () => {
    const newPositions = [...positions, { id: nanoid(15) }]
    setPositions(newPositions)
  }

  return (
    <>
      {positions.map((position, index) => (
        <Position
          key={position.id}
          id={position.id}
          removePosition={removePosition}
        />
      ))}
      <Button addPosition={addPosition} />
    </>
  )
}
