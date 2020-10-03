import React from "react"
import styled from "styled-components"
import Cell from "./Cell"

const Board = (props: number) => {
  return (
    <Grid className="board">
      <Cell id={1} />
      <Cell id={2} />
      <Cell id={3} />
      <Cell id={4} />
      <Cell id={5} />
      <Cell id={6} />
      <Cell id={7} />
      <Cell id={8} />
      <Cell id={9} />
    </Grid>
  )
}

export const Grid = styled.div`
  width: 600px;
  height: 600px;
  margin: 0 auto;
  background-color: #34495e;
  color: #fff;
  border: 6px solid #2c3e50;
  border-radius: 10px;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`

export default Board
