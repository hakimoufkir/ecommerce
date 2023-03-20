import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Carousel from './Components/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import Products from './Components/Products';
import Pagination from './Components/Pagination';


function App() {
  return (
    <div>
   <Navbar/>
   <Carousel/>
    <Container fluid>
      <Row>
        <Col md={1} className="bg-light">
          <Sidebar/>
        </Col>
        <Col md={11}>          
          <Products/>
        </Col>
      </Row>
    </Container>
  <Pagination/>
   <Footer/>
    </div>
  );
}

export default App;
