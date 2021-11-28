import { useSelector } from "react-redux";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Icon from "../Share/Icon";
import Logo from "../Share/Logo";

const Menu = (props) => {
  const appStore = useSelector((store) => store.general.app);
  const emailStore = useSelector((store) => store.user.info.email);

  return (
    <>
      {" "}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#" onClick={() => props.setShowWindow("M")}>
            <img
              alt=""
              src={appStore.img + "/tesalia-cbc-logo-new.png"}
              width="80"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" onClick={() => props.setShowWindow("M")}>
                <Icon
                  img={appStore.ico + "311-app.svg"}
                  xheight={10}
                  xwidth={10}
                />{" "}
                {" Inicio"}
              </Nav.Link>
              <Nav.Link href="#new" onClick={() => props.setShowWindow("N")}>
                <Icon img={appStore.ico + "add.svg"} xheight={10} xwidth={10} />{" "}
                {" Nuevo"}
              </Nav.Link>
              <Nav.Link href="#find" onClick={() => props.setShowWindow("F")}>
                <Icon
                  img={appStore.ico + "controls2.svg"}
                  xheight={10}
                  xwidth={10}
                />
                {" Busqueda"}
              </Nav.Link>
              <NavDropdown title="Opciones" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="#user"
                  onClick={() => props.setShowWindow("D")}
                >
                  <Icon img={appStore.ico + "idCard3.svg"} />
                  {emailStore}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#exit">
                  <Icon
                    img={appStore.ico + "cancel.svg"}
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
