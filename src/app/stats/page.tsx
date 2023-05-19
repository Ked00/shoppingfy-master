"use client";
import {Row, Col} from "react-bootstrap";

export default function stats() {
  return (
    <div className="container">
      <Row className="p-5">
        <Col xs={4} className="p-5">
          <h4 className="mb-7">Top items</h4>
          
        </Col>
        <Col xs={4} className="p-5">
          <h4 className="mb-7">Top Categories</h4>
         
        </Col>
      </Row>
    </div>
  );
}
