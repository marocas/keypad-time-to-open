import { Col, Container, Row } from 'react-bootstrap';
import Keypad from './Keypad';

const Layout = () => (
  <>
    <Container as="main" className="mt-5">
      <Row>
        <Col xs="12">
          <Keypad />
        </Col>
      </Row>
    </Container>
  </>
)


export default Layout;
