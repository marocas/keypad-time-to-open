import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import useDebounce from '../../hooks/useDebounce'
import KeypadForm from './KeypadForm'
import { StyledTable } from './Styled'
import { arrGenerator, neighbor } from './Utils'

const Keypad = () => {
  const [ grid, setGrid ] = useState([])
  const [ code, setCode ] = useState([])
  const [ sum, setSum ] = useState(0)
  const [ prev, setPrev ] = useState(undefined)
  const [ gridSize, setGridSize ] = useState('3x3')
  const [ gridCustom, setGridCustom ] = useState(undefined)
  const customGridDebounce = useDebounce(gridCustom, 250)


  const handleClick = (current) => {
    let arr = []
    if (prev && prev !== current) {
      grid.forEach((row, x) => {
        const y = row.indexOf(current)
        if (y > -1) arr = neighbor(x, y, grid)
      })

      if (arr.includes(prev)) setSum(sum + 1)
      else setSum(sum + 2)
    }

    setPrev(current)
    setCode([ ...code, current ])
  }

  const generateKeypad = () => setGrid(arrGenerator(gridCustom || gridSize))

  const resetCounters = () => {
    setCode([])
    setSum(0)
    setPrev(undefined)
  }
  useEffect(() => {
    generateKeypad()
  }, [ gridSize, customGridDebounce ])

  return (
    <>
      <KeypadForm
        option={gridSize}
        options={[ '2x2', '3x3', '4x4', 'custom' ]}
        optionOnChange={(evt) => {
          resetCounters()
          setGridSize(evt.currentTarget.innerText)
          setGridCustom(undefined)
        }}
        inputOnChange={(evt) => {
          resetCounters()
          setGridCustom(evt.currentTarget.value)
        }}
      />

      <Row>
        <Col xs="12">
          <code>
            {!!code.length
              ? <pre>{code.map((x) => `${x} `)}</pre>
              : <pre>door lock, enter code</pre>
            }
          </code>
        </Col>
      </Row>

      <Row>
        <Col xs='12'>
          {grid && (
            <StyledTable>
              <tbody>
                {grid.map((row, idx) => (
                  <tr key={idx}>
                    {row.map((key) =>
                      <td key={key} className="text-center border-1 cursor-pointer"
                        onClick={(evt) => handleClick(Number(evt.currentTarget.innerText))}
                      >
                        {key}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          )}
        </Col>
      </Row>

      {sum > 0 &&
        <Row>
          <Col xs="12">
            <code>
              <pre>time spend inserting code: {sum}sec</pre>
            </code>
          </Col>
        </Row>
      }

      <Row>
        <Col xs="12" className='mt-2'>
          <Button
            variant='primary'
            onClick={() => {
              resetCounters()
              generateKeypad()
            }}
          >
            New Keypad
          </Button>
        </Col>

        {!!code.length &&
          <Col xs="12" className='mt-2'>
            <Button
              variant='secondary'
              onClick={() => resetCounters()}
            >
              clear
            </Button>
          </Col>
        }
      </Row>
    </>
  )
}

export default Keypad
