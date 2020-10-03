import React, { Component } from "react"
import styled from "styled-components"
// import "../App.css"

interface CellProps {
  id: number
}

const CellDiv = styled.div`
  border: 6px solid #2c3e50;
  border-radius: 2px;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Cell = ({ id }: CellProps) => {
  return <CellDiv>1</CellDiv>
}

export default Cell
