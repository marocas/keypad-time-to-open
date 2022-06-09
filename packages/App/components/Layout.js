import { Col, Container, Row } from 'react-bootstrap';
import Keypad from './Keypad/index';

const Layout = () => (
  <>
    <Container as="main" className="mt-5">
      <Row>
        <Col xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
          <Keypad />
        </Col>
      </Row>
    </Container>
  </>
)


export default Layout;
