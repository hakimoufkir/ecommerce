import { MDBBadge, MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'

function Panier() {
  return (
    <>    
          
        {/* <MDBNavbarLink href='#'><MDBIcon fas icon="cart-arrow-down" /></MDBNavbarLink> */}

              <MDBBadge pill color='danger'>4</MDBBadge>
              <span>
                <MDBIcon fas icon='shopping-cart' className=''></MDBIcon>
              </span>

   
    </>
  )
}

export default Panier