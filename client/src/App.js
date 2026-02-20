
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";*/
import { Container, Row, Col } from "reactstrap";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Header></Header>

        </Row>
        <Row className="main">
          <Home></Home>

        </Row>
        <Row>
          <Footer></Footer>

        </Row>
      </Container>
    </>
  );
};

export default App;
