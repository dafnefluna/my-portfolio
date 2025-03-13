import { Container, Row, Col} from 'react-bootstrap'

import './App.css'

// note: these classes are from the utilities in Bootstrap documentation to override the default stylesheet
// note: md is the width of the column
function App() {

  return (
    <Container fluid className="p-0 h-100">
      <Row className="h-100 g-0">
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center box1">
          Dafne Luna
        </Col>
        <Col xs={12} md={4} className="d-flex flex-column">
          <div className="edbox flex-grow-1 d-flex align-items-center justify-content-center">
            EdBox
          </div>
          <div className="devbox flex-grow-1 d-flex align-items-center justify-content-center">
            DevBox
          </div>
        </Col>
        <Col xs={12} md={2} className="d-flex align-items-center justify-content-center sidebox">
          Sidebar
        </Col>
      </Row>
    </Container>
  )
}

export default App
