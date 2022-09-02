import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'
function Header() {
  return (
    <div>
          <Nav>
               <NavMenu >
                    <a><Link href = 'register-member'><span>Register New Member</span></Link></a>
                    <a><Link href = 'all-members'><span>All Members</span></Link></a>
                    <a><Link href = 'todays-celebrants'><span>Today's Celebrants</span></Link></a>

               </NavMenu>
          </Nav>
    </div>
  )
}

export default Header
const Nav = styled.nav`
     display: flex;
     justify-content: center;
     align-items: center;
     height: 72px;
     background-color: #fff;
     color: #000;
    
`

const NavMenu = styled.div `
     align-items: center;
     display: flex;
     flex-flow: row nowrap;
     height: 100%;
     justify-content: flex-end;
     margin: 0px;
     padding: 0px;
     position: relative;
     margin-right: auto;
     margin-left: 25px;
     cursor: pointer;
    align-self: start;

    a{
          display: flex;
          align-items: center;
          padding: 0 10px;
     span{
          list-style-type: none;
          font-size: 13px;
          letter-spacing: 1.42px;
          line-height: 1.08;
          padding: 0px 5px;
          white-space: nowrap;                                   
          position: relative;
          cursor: pointer;

          &:before {
               background-color: rgb(249, 229, 109);
               border-radius: 0px 0px 4px 4px;
               bottom: -6px;
               content: "";
               height: 2px;
               left: 0px;
               opacity: 0;
               position: absolute;
               right: 0px;
               transform-origin: left center;
               transform: scaleX(0);
               transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
               visibility: hidden;
               width: auto;
          }
     }
     &:hover {
          span:before {
               transform: scaleX(1);
               visibility: visible;
               opacity: 1 !important;
          }
     }
    }
`
     
