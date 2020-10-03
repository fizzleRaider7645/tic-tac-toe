import React from "react"
import Cell from "./Cell"
// import { connect } from "react-redux"
// import { placeToken } from "../actions/BoardActions"

const Board = (props: number) => {
  return (
    <div className="board">
      <Cell id={1} />
      <Cell id={2} />
      <Cell id={3} />
      <Cell id={4} />
      <Cell id={5} />
      <Cell id={6} />
      <Cell id={7} />
      <Cell id={8} />
      <Cell id={9} />
    </div>
  )
}

export default Board
