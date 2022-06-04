import React, { Fragment } from 'react'
import { Col, Dropdown, DropdownButton, FormControl, InputGroup, Row } from 'react-bootstrap'

const KeypadForm = ({ options, option, optionOnChange, inputOnChange }) => (
  <Row>
    <Col xs="12">
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title={option ? `Size: ${option}` : 'Keypad size'}
          id="input-group-dropdown-1"
        >
          {options.map((value) => (
            <Fragment key={value}>
              {value === 'custom' && <Dropdown.Divider />}

              <Dropdown.Item as='button' onClick={optionOnChange}>
                {value}
              </Dropdown.Item>
            </Fragment>
          ))}
        </DropdownButton>

        {option === 'custom' &&
          <FormControl type="text" placeholder="Text input with dropdown button" onChange={inputOnChange} />
        }
      </InputGroup>
    </Col>
  </Row>
)

export default KeypadForm
