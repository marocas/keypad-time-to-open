import { Row, Table } from 'react-bootstrap'
import styled from 'styled-components'

export const StyledTable = styled(Table)`
  ${({ theme }) => (`
    @media (min-width: ${theme.breakpoint.sm}) {
      width: 50%;
      margin: 0 auto;
    }
  `)}
`

export const KeyRow = styled(Row)`
  margin: .2em 0;
`

export const Key = styled.button`
    position: relative;
    background: #333;
    text-align: center;
    color: #eee;
    float: left;
    border-radius: 0.3em;
    margin: 0.2em;
    padding: 0.2em;
    width: 3.3em;
    height: 3em;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-user-select: none;
    border: 1px solid #444;
    box-shadow: 0 0.2em 0 0.05em #222;
    border-bottom-color: #555;

    &:active {
      background: #2a2a2a;
      color: #aaa;
      position: relative;
      top: 0.2em;
      box-shadow: 0 0 0 0.05em black;
    }
  ${'' /* border: 1px solid grey;

  &:hover {
    background-color: rgba(0, 0, 0, .2);
    cursor: pointer;
  } */}
`
