import React, { useState } from 'react';
import {
  MDBIcon,
  MDBCollapse,
  MDBRipple,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import Col from 'react-bootstrap/Col';

const SideNav = () => {
  const [showActive, setShowActive] = useState('TopSearchSelect');

  const showComponent = (componentName) => {
    setShowActive(componentName);
  };

  const toggle = () => {
    setShowActive(!showActive);
  };

  return (
    <Col className="p-0 sideNav stickySideNav" md="2">
          <MDBCollapse tag="nav" className="d-lg-block text-white bg-white sidebar">
            
              <MDBListGroup flush>
                <MDBRipple rippleTag='span'>
                  <MDBListGroupItem tag='a' href="" onClick={() => showComponent('TopSearchSelect')} action aria-current="true" className={showActive === 'TopSearchSelect' ? 'active' : 'border-0 border-bottom'}>
                    <MDBIcon fas icon="tachometer-alt me-3" />
                    Dashboard
                  </MDBListGroupItem>
                </MDBRipple>

                <MDBRipple rippleTag='span'>
                  <MDBListGroupItem tag='a' href='#' onClick={() => showComponent('InspectionForm')} action className={showActive === 'InspectionForm' ? 'active' : 'border-0 border-bottom'}>
                    <MDBIcon fas icon="magnifying-glass-chart me-3" />
                    RFI Entry
                  </MDBListGroupItem>
                </MDBRipple>

                <MDBRipple rippleTag='span'>
                  <MDBListGroupItem tag='a' href='' action className='border-0 border-bottom '>
                    <MDBIcon far icon="comments me-3" />
                    RFI Comments
                  </MDBListGroupItem>
                </MDBRipple>

                <MDBRipple rippleTag='span'>
                  <MDBListGroup className="editSection">
                    <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom '>
                      <MDBIcon far icon="pen-to-square me-3" />
                      Edit Documents
                    </MDBListGroupItem>
                    <MDBListGroupItem className="py-1" tag='a' action href='#'>IMSR</MDBListGroupItem>
                    <MDBListGroupItem className="py-1" tag='a' action href='#'>NCR</MDBListGroupItem>
                    <MDBListGroupItem className="py-1" tag='a' action href='#'>IPIR</MDBListGroupItem>
                    <MDBListGroupItem className="py-1" tag='a' action href='#'>IDF</MDBListGroupItem>
                  </MDBListGroup>
                </MDBRipple>

                <MDBRipple rippleTag='span'>
                  <MDBListGroup className="acknowledgeSection">
                    <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom '>
                      <MDBIcon fas icon="file-signature me-3" />
                      Acknowledgements
                    </MDBListGroupItem>
                    <MDBListGroupItem className="py-1" tag='a' action href='#'>Conforming Material</MDBListGroupItem>
                    <MDBListGroupItem className="py-1" tag='a' action href='#'>Material to be Waived</MDBListGroupItem>
                  </MDBListGroup>
                </MDBRipple>
              </MDBListGroup>
            
          </MDBCollapse>
        </Col>
  );
}
export default SideNav;