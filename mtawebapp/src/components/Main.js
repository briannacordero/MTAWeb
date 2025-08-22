import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBRipple,
  MDBBadge,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from '../components/DataTable';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import TopSearchSelect from '../components/DataTable';
import InspectionForm from '../forms/InspectForm';

const MainContainer = () => {
  const [showActive, setShowActive] = useState('TopSearchSelect');

  const showComponent = (componentName) => {
    setShowActive(componentName);
  };

  const toggle = () => {
    setShowActive(!showActive);
  };

  return (
    <Container fluid>
      <Row>
        <Col className="p-0 sideNav stickySideNav" md="2">
          <MDBCollapse tag="nav" className="d-lg-block text-white bg-white sidebar">
            
              <MDBListGroup flush>
                <MDBRipple rippleTag='span'>
                  <MDBListGroupItem tag='a' href="" action aria-current="true" className={showActive === 'TopSearchSelect' ? 'active' : 'border-0 border-bottom'}>
                    <MDBIcon fas icon="tachometer-alt me-3" />
                    Dashboard
                  </MDBListGroupItem>
                </MDBRipple>

                <MDBRipple rippleTag='span'>
                  <MDBListGroupItem tag='a' href='' action ria-current="true" className={showActive === 'MainContainer' ? 'active' : 'border-0 border-bottom'}>
                    <MDBIcon far icon="comments me-3" />
                    RFI Entry
                  </MDBListGroupItem>
                </MDBRipple>
                <MDBRipple rippleTag='span'>
                  <MDBListGroupItem tag='a' href='' action className='border-0 border-bottom '>
                    <MDBIcon far icon="comments me-3" />
                    CPM
                  </MDBListGroupItem>
                </MDBRipple>
                <MDBRipple rippleTag='span'>
                  <MDBListGroupItem tag='a' href='' action className='border-0 border-bottom '>
                    <MDBIcon far icon="comments me-3" />
                    Purchase Order
                  </MDBListGroupItem>
                </MDBRipple>
                <MDBRipple rippleTag='span'>
                  <MDBListGroupItem tag='a' href='' action className='border-0 border-bottom '>
                    <MDBIcon far icon="comments me-3" />
                    SC - Capital
                  </MDBListGroupItem>
                </MDBRipple>
                <MDBRipple rippleTag='span'>
                  <MDBListGroupItem tag='a' href='' action className='border-0 border-bottom '>
                    <MDBIcon far icon="comments me-3" />
                    SO - Operating
                  </MDBListGroupItem>
                </MDBRipple>
                <MDBRipple rippleTag='span'>
                  <MDBListGroupItem tag='a' href='' action className='border-0 border-bottom '>
                    <MDBIcon far icon="comments me-3" />
                    SI - Inspections
                  </MDBListGroupItem>
                </MDBRipple>
              </MDBListGroup>
            
          </MDBCollapse>
        </Col>
        <Col md="10">
          <MDBContainer fluid className='mt-4'>
            <MDBCard>
              <MDBCardBody>
                <InspectionForm />
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </Col>
      </Row>
    </Container>
  );
}
export default MainContainer;