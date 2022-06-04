import 'bootstrap/scss/bootstrap-utilities.scss'
import { Button, Table } from 'react-bootstrap'
import styled from 'styled-components'

export const Key = styled(Button)`
  height: 50px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 0;
  margin: 0;
  border: 0;

  border-bottom: 1px solid;
  border-right: 1px solid;

  &:nth-of-type(-1n + ${props => props.size}) {
    border-top: 1px solid;
  }
  &:nth-of-type(${props => props.size}n + 1) {
    border-left: 1px solid;
  }


`

export const StyledTable = styled(Table)`
  @media (min-width: map.get($grid-breakpoints, 'sm')) {
    width: 50%;
    background-color: red;
  }

  td {
    &:hover {
      background-color: rgba(0, 0, 0, .2);
      cursor: pointer;
    }
  }
`
