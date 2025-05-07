import { Col, Container, Row, Button } from "react-bootstrap"

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">MISSION PASSED</div>
            <div className="title">MEMBUAT WEB INTERAKTIF</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">COMING SOON GUYS, SOALNYA RIBET BUATNYA</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro
