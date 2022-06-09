import { createRef, useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import useDebounce from '../../hooks/useDebounce'
import KeypadForm from './KeypadForm'
import { Key, KeyRow } from './Styled'
import { arrGenerator, isNeighbor, neighbors } from './Utils'

const Keypad = () => {
  const keypadRef = createRef(null)
  const [ FLAG, setFLAG ] = useState(false)
  const [ grid, setGrid ] = useState([])
  const [ code, setCode ] = useState([])
  const [ sum, setSum ] = useState(0)
  const [ prev, setPrev ] = useState(undefined)
  const [ gridSize, setGridSize ] = useState('3x3')
  const [ gridCustom, setGridCustom ] = useState(undefined)
  const customGridDebounce = useDebounce(gridCustom, 250)


  const handleKey = (current) => {
    let arr = []
    if (prev && prev !== current) {
      grid.forEach((row, x) => {
        const y = row.indexOf(current)
        if (y > -1) arr = neighbors(x, y, grid)
      })

      if (isNeighbor({ arr, current, prev })) setSum(sum + 1)
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


  // const handleKeyPress = (callback) => {
  //   callback()
  // }

  // useEffect(() => {
  //   console.log('here')
  //   let key = null
  //   if (keypadRef.current && !FLAG) {
  //     console.log('keypadRef', keypadRef)
  //     setFLAG(true)
  //     document.addEventListener('keydownq', (evt) => {
  //       handleKeyPress(() => {
  //         const code = evt.code.replace('Digit', '').replace('Key', '')
  //         key = document.querySelector(`[data-key="${code}"]`)

  //         console.log(key)
  //         key && handleKey(Number(code))
  //       })

  //     })

  //     document.addEventListener('keyup', (evt) => {
  //       handleKeyPress(() => {
  //         const code = evt.code.replace('Digit', '').replace('Key', '')
  //         key = document.querySelector(`[data-key="${code}"]`)

  //         console.log(key)
  //         key && handleKey(Number(code))
  //       })
  //     })
  //   }

  //   return () => {
  //     document.removeEventListener('keydown', handleKeyPress)
  //     document.removeEventListener('keyup', handleKeyPress)
  //   }
  // }, [])

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

      {grid && (
        <div ref={keypadRef}>
          {grid.map((row, idx) => (
            <KeyRow key={idx}>
              <Col xs="12" className="p-0">
                {row.map((key) =>
                  <Key key={key}
                    data-key={key}
                    onClick={() => handleKey(Number(key))}
                  >
                    {key}
                  </Key>
                )}
              </Col>
            </KeyRow>
          ))}
        </div>
      )}

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
