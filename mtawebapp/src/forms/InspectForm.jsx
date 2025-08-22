import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBSelect, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCard, MDBCardBody, MDBCardTitle, MDBRadio, MDBCheckbox, MDBSelectOption } from 'mdb-react-ui-kit';


const InspectionForm = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };


  return (
    <div id="FormStyles">
      <MDBCardTitle>Request For Inspection</MDBCardTitle>
      {/* Contract Section */}
      <MDBRow>
        <h4 className='mt-3'>Contract</h4>
        <MDBCol size="12">
          <div className="form-group mt-3">
            <label className={selectedValue ? 'active' : ''} htmlFor="contractType">
              Contract Type
            </label>
            <select
              id="contractType"
              className="form-select mb-3"
              onChange={handleSelectChange}
              value={selectedValue}
            >
              <option value="">Choose...</option>
              <option value="Purchase Order">Purchase Order</option>
              <option value="SC - Capital">SC - Capital</option>
              <option value="SO - Operating">SO - Operating</option>
              <option value="SI - Inspection">SI - Inspection</option>
            </select>
          </div>
        </MDBCol>
        <MDBCol>
          <MDBInput label="RFI Type" value="Special Project" />
        </MDBCol>
        <MDBCol>
          <MDBInput label="Status" value="CLOSED" />
        </MDBCol>
        <MDBCol>
          <MDBInput label="Material Ready Date" value="12/01/2025" />
        </MDBCol>
        <MDBCol>
          <MDBInput label="RFI Date" value="12/16/2025" />
        </MDBCol>
        {/* Other Contract Fields... */}
        <MDBCol size="12">
          <MDBRow>
            <MDBCol>
              <MDBInput label="Edit By" value="Brian Smith" />
            </MDBCol>
            <MDBCol>
              <MDBInput label="Request Recieved Date" value="12/01/2025" />
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>


      {/* Vendor Section */}
      <MDBRow>
        <div className='d-flex align-items-center justify-content-sm-between'>
          <h4 className='mt-3'>Vendor</h4>
          <MDBBtn className='ml-auto'>Update Vendor List</MDBBtn>
        </div>
        <MDBCol size="12">
          <MDBInput label="Contact" value="Cleveland Cliffs" />
        </MDBCol>
        <MDBCol>
          <MDBInput label="Phone" type="tel" value="717-960-2152" />
        </MDBCol>
        <MDBCol>
          <MDBInput label="Fax" type="tel" value="717-960-2114" />
        </MDBCol>
        <MDBCol>
          <MDBInput label="Mobile" type="tel" />
        </MDBCol>
        <MDBCol>
          <MDBInput label="Email" type="email" value="john.doe@gmail.com" />
        </MDBCol>


        {/* Supplier Section */}
        {/* Similar structure as Vendor Section... */}
      </MDBRow>
      <MDBRow>
        {/* Materials Section */}
        <div className='d-flex align-items-center justify-content-sm-between'>
          <h4 className='mt-3'>Materials</h4>
          <MDBBtn className='ml-auto'>Update Commodity</MDBBtn>
          {/* Other Material Fields... */}
        </div>
        <MDBCol>
          <label htmlFor="materialCommodity">Material Commodity</label>
          <select id="materialCommodity" className="form-select mb-3">
            <option value=""> - - 0</option>
          </select>
        </MDBCol>
        <MDBCol>
          <label htmlFor="materialCode">Material Code</label>
          <select id="materialCode" className="form-select mb-3">
            <option value="">A8</option>
          </select>
        </MDBCol>
        <MDBCol size="12">
          <MDBInput type="textarea" label="Notes" value="100-8 HH Rail" />
        </MDBCol>
        <form className="mt-3">
          <MDBRadio name="inlineRadio" id="countCost" label="Count Cost" inline />
          <MDBRadio name="inlineRadio" id="doNotCountCost" label="Do NOT Count Cost" inline />
        </form>
        <MDBCol>
          <MDBInput label="Value of Material" type="number" icon="$" value="406.50" />
        </MDBCol>
        <MDBCol>
          <MDBInput type="textarea" label="Project Goal" />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        {/* Inspect */}
        <div className='d-flex align-items-center justify-content-sm-between'>
          <h4 className='mt-3'>Inspection Coordinator Action Items</h4>
          {/* Other Material Fields... */}
        </div>
        <MDBCol>
          <form className="mt-3">
            <MDBCheckbox name="inlineCheckbox" id="countCost" label="Copy of P.O." inline />
            <MDBCheckbox name="inlineCheckbox" id="doNotCountCost" label="Product Data Sheet" inline />
            <MDBCheckbox name="inlineCheckbox" id="countCost" label="Mill Papers" inline />
            <MDBCheckbox name="inlineCheckbox" id="doNotCountCost" label="CPM Contract Material Spec." inline />
            <MDBCheckbox name="inlineCheckbox" id="countCost" label="BatchLot Test Certificate" inline />
            <MDBCheckbox name="inlineCheckbox" id="doNotCountCost" label="Certificate of Compliance" inline />
          </form>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        {/* Inspect */}
        <div className='d-flex align-items-center justify-content-sm-between'>
          <h4 className='mt-3'>NYCT Action Items</h4>
          {/* Other Material Fields... */}
        </div>
        <MDBCol>
          <form className="mt-3">
            <MDBCheckbox name="inlineCheckbox" id="countCost" label="Change Back" inline />
            <MDBCheckbox name="inlineCheckbox" id="doNotCountCost" label="Material Accepted" inline />
          </form>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        {/* Inspect */}
        <div className='d-flex align-items-center justify-content-sm-between'>
          <h4 className='mt-3'>Structural Steel Only</h4>
          {/* Other Material Fields... */}
        </div>
        <MDBCol>
          <form className="mt-3">
            <MDBCheckbox name="inlineCheckbox" id="countCost" label="AISC Cert" inline />
            <MDBCheckbox name="inlineCheckbox" id="doNotCountCost" label="Buy America" inline />
            <MDBCheckbox name="inlineCheckbox" id="countCost" label="Scale" inline />
            <MDBCheckbox name="inlineCheckbox" id="doNotCountCost" label="Indep.MDT" inline />
          </form>
        </MDBCol>
      </MDBRow>

      <MDBBtn className='mt-3' color="primary" type="submit">
        Submit
      </MDBBtn>

    </div>
  );
};

export default InspectionForm;
