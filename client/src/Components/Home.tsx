import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Wrapper = styled.div``

const Home = () => {
  fetch("http://localhost:3000/games")
    .then((res) => res.json())
    .then((games) => console.log(games))
  return <Wrapper>Hi</Wrapper>
}

export default Home
