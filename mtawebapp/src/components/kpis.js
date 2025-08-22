import React from 'react';
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
  } from 'mdb-react-ui-kit';

function KPIs() {
    return(

    
    <MDBRow className='row-cols-1 row-cols-md-3 g-4 mb-4 mt-1'>
        <MDBCol>
            <MDBCard className='h-100 text-white bg-success'>
                <MDBCardBody>
                    <MDBCardTitle>Complete</MDBCardTitle>
                    <MDBCardText>100
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol>
            <MDBCard className='h-100 text-white bg-warning'>
                <MDBCardBody>
                    <MDBCardTitle>Pending</MDBCardTitle>
                    <MDBCardText>45</MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol>
            <MDBCard className='h-100 text-white bg-danger'>
                <MDBCardBody>
                    <MDBCardTitle>Closed</MDBCardTitle>
                    <MDBCardText>400
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </MDBRow>
    )
}
export default KPIs;