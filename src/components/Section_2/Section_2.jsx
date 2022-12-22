import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Section_2 = () => {
  return (
    <div className='component_2'>
        <Container>
            <Row>
                <Col xl={7}>
                    <Row>
                        <Col xl={12}>
                            <h1 className='title'>SOBRE MI</h1>
                        </Col>
                        <Col xl={'auto'} md={"auto"} sm={12}>
                            <p className='about_me'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col xl={5} className="d-flex justify-content-center">
                <div className='img_animation'>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Section_2