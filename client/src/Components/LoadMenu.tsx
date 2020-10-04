import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { axiosInstance } from "../services"

interface GameType {
  turn_count: null | number
}

const LoadMenu = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetchSavedGames()
  }, [])

  const fetchSavedGames = async () => {
    try {
      const { data } = await axiosInstance.get("/games")
      setGames(data)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  const list = games.map((game: GameType, i: number) => {
    return <li key={i}>{game.turn_count}</li>
  })

  return <SavedGames>{list}</SavedGames>
}

const SavedGames = styled.ul`
  list-style-type: none;
`

export default LoadMenu
