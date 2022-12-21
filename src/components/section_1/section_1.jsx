import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Section_1 = () => {
  return (
    <div className="component_1">
      <Container>
        <Row>
            <Col xl={9} md={7} sm={12}>
                <Row className="spacing-row">
                    <Col xl={12}>
                        <h1 className="title_name">
                            <span className="purple">J</span>eferson <span className="purple">D</span>avid <span className="purple">C</span>amero 
                        </h1>
                    </Col>
                    <Col xl={12}>
                        <span className="info_1">
                            FULL STACK DEVELOPER
                        </span>
                    </Col>
                    <Col xl={5}>
                        <p id="description">
                            Apasionado a la programación y a las nuevas tecnólogias
                            de desarrollo
                        </p>
                    </Col>
                    <Col xl={12}>
                        <button className="btn-project">
                            <span className="info_1">
                                VER PROYECTOS
                            </span>
                        </button>
                    </Col>
                </Row>
            </Col>
          <Col xl={3} md={5} sm={12}>
          <div className="elipse">
            <img src="./" alt="" />
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section_1;
