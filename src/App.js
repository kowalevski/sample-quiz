import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Form, FormControl, Button, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Notes App</h1>
        <Row className="justify-content-md-center">
          <Col md={6} offset={6}>
            <Form>
              <FormControl placeholder="Please type..." />
              <br />
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
