import React, {useState} from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBBtn,
    MDBCardTitle
} from 'mdb-react-ui-kit';
import KPIs from '../components/kpis';
import TopSearchSelect from '../components/DataTable';
import rfiEntry from '../RFIEntry';


const MainContainer = () => {
    return <MainContainer />
}

const LandingPage = ({ handleComponentClick }) => {

    return (
        <div>
            <KPIs />
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle>Search RFIs
                        <MDBBtn onClick={rfiEntry}className='ml-auto'>Create RFI</MDBBtn>
                    </MDBCardTitle>
                    <TopSearchSelect />
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}

export default LandingPage;