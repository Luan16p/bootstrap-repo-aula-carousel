import * as React from 'react';

import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

function Footer() {
  return (
    <CDBFooter className="footer bg-dark shadow rouded p-5 md-7">
      <h2>Footer</h2>

      <CDBBox className="content">
        <CDBBox>
          <h3>Help</h3>
          <CDBFooterLink>Lorem 1</CDBFooterLink>
          <CDBFooterLink>Lorem 2</CDBFooterLink>
          <CDBFooterLink>Lorem 3</CDBFooterLink>
          <CDBFooterLink>Lorem 4</CDBFooterLink>
        </CDBBox>

        <CDBBox>
          <h3>Another</h3>
          <CDBFooterLink>Lorem 1</CDBFooterLink>
          <CDBFooterLink>Lorem 2</CDBFooterLink>
          <CDBFooterLink>Lorem 3</CDBFooterLink>
          <CDBFooterLink>Lorem 4</CDBFooterLink>
        </CDBBox>
      </CDBBox>

      <span>&copy; IFMS - Todos os Direitos Reservados</span>
    </CDBFooter>
  );
}
export default Footer;
