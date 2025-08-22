import React, { useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBBtn,
    MDBCardTitle,
    MDBContainer
} from 'mdb-react-ui-kit';
import KPIs from '../components/kpis';
import TopSearchSelect from '../components/DataTable';
import rfiEntry from '../RFIEntry';


const Home = ({ onButtonClick }) => {
    const handleClick = () => {
        onButtonClick('MainContainer');
    };
    return (
        <MDBContainer>
            <KPIs />
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle className='d-flex align-items-center'>Search RFIs
                        <MDBBtn onClick={handleClick} className='ms-auto'>Create RFI</MDBBtn>
                    </MDBCardTitle>
                    <TopSearchSelect />
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default Home;