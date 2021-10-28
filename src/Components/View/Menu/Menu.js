import { useSelector } from "react-redux";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Icon from "../Share/Icon";
import Logo from "../Share/Logo";

const Menu = (props) => {
  const routeImg = useSelector((store) => store.general.app.ico);
  const emailStore = useSelector((store) => store.user.info.email);

  return (
    <>
      {" "}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <div onClick={() => props.setShowWindow("M")}>{/* <Logo /> */}</div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#new" onClick={() => props.setShowWindow("N")}>
                <Icon img={routeImg + "add.svg"} xheight={10} xwidth={10} />{" "}
                {" Nuevo"}
              </Nav.Link>
              <Nav.Link href="#home" onClick={() => props.setShowWindow("F")}>
                <Icon
                  img={routeImg + "controls3.svg"}
                  xheight={10}
                  xwidth={10}
                />
                {" Busqueda"}
              </Nav.Link>
              <NavDropdown title="Opciones" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="#action/3.3"
                  onClick={() => props.setShowWindow("U")}
                >
                  <Icon img={routeImg + "idCard3.svg"} />
                  {emailStore}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <Icon
                    img={routeImg + "controls3.svg"}
                    xheight={10}
                    xwidth={10}
                  />
                  {" Salir"}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
