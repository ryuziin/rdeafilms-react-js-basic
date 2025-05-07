import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">FIRMAN X RYUZIN FILMS</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">TRANDING</Nav.Link>
            <Nav.Link href="#superhero">SUPER HERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
