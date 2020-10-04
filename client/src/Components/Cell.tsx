import React from "react"
import styled from "styled-components"

interface CellProps {
  id: number
}

const Cell = ({ id }: CellProps) => {
  return <Space>1</Space>
}

const Space = styled.div`
  border: 6px solid #2c3e50;
  border-radius: 2px;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Cell
