import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

const Loader = () => (
  <Container className="d-flex justify-content-center mt-5">
    <Spinner animation="border" role="status" className="me-4" />
    <span style={{ fontSize: '1.5rem' }}>Loading...</span>
  </Container>
);

export default Loader;
