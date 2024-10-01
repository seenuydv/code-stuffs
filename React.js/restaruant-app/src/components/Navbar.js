import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';


function Navigationbar(){
  const coolcount = useSelector((state) => state.counter)

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Shiv Sagar Restaurant
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end pe-2">
            <Cart/>
      </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;