import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "https://code.jquery.com/jquery-3.5.1.slim.min.js";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./RegularFooter.css";

import { CDBFooter, CDBFooterLink, CDBBtn, CDBBox, CDBIcon, CDBContainer } from 'cdbreact';


export default function RegularFooter() {


  return (
    <div style={{background:"lightgray"}}>
      <CDBFooter className="shadow" style={{}}>
        {/* <CDBBox display="flex" flex="column" className="mx-auto py-2" style={{ width: '60%' }}>
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <div className="col-md-4 " display="flex" flex="row">
                <div class="offset-1 m-1">
                  <h6>Subscribe to our newsletter</h6>
                  <p>Monthly digest of whats new and exciting from us.</p>
                </div>
              </div>


            </CDBBox>
            <CDBBox className="Subscribe" style={{ width: '80%' }}  >
              <form>
                <div class="d-flex w-90 gap-2">
                  <input
                    id="newsletter1"
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                  />
                  <button class="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </CDBBox>
          </CDBBox>
        </CDBBox> */}
        <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '80%' }}>
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">

            <CDBBox>


              <p className="h5 mb-4" style={{ fontWeight: '500' ,color: "black"}}>
              COMPANY NAME
              </p>
              <p className="my-3" style={{ width: '250px' ,color:"gray"  }}>
            


                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>

            </CDBBox>
         
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '500' }}>
                PRODUCTS
              </p>
              <CDBBox flex="column" display="flex" text-uppercase  style={{ cursor: 'pointer', padding: '0', color: "gray" }}>
                <CDBFooterLink >Angular</CDBFooterLink>
                <CDBFooterLink >React</CDBFooterLink>
                <CDBFooterLink >Vue</CDBFooterLink>

              </CDBBox>

            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '500' }}>
              LINKS
              </p>
              <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0', color: "gray" }}>
                <CDBFooterLink >Pricing</CDBFooterLink>
                <CDBFooterLink >Settings</CDBFooterLink>
                <CDBFooterLink >Orders</CDBFooterLink>
              </CDBBox>
            </CDBBox>
         
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '500' }}>
                CONTACTS
              </p>
              <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0', color: "gray" }}>
                <CDBFooterLink> <i className="fas fa-home me-3 text-secondary"></i> New York,
                  NY 10012, USe</CDBFooterLink>
                <CDBFooterLink ><i className="fas fa-envelope me-3 text-secondary"></i>
                  info@example.com</CDBFooterLink>
                <CDBFooterLink><i className="fas fa-phone me-3 text-secondary"></i> + 01 234
                  567 88</CDBFooterLink>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <CDBBox
            display="flex"
            justifyContent="center"
            style={{ width: '100%' }}
            className="mx-auto mt-4"
          >
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
          <small style={{color:"gray"}} className="text-center mt-5"> © 2021 Copyright: <a  className="text-reset fw-bold " href="https://dgovind.com/">
            GovindBOI King
          </a></small>
        </CDBBox>
      </CDBFooter>
    </div>
  );
}
