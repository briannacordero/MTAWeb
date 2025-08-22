import React from "react";
import {MDBIcon} from "mdbreact";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"

const SearchPage = () => {
  return (
    <Row className="justify-content-md-center">
        <Col md="6">
          <form className="d-flex mt-4 mb-4 align-items-center">
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
            <MDBIcon className="ps-3" icon="search" />
          </form>
        </Col>
    </Row>
  );
}

export default SearchPage;