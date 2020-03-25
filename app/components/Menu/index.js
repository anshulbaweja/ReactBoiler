import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';


function Menu() {
 
  return (


    <Wrapper id ="expand">
      <div id="ham" style={{float:"right", lineHeight:"1px"}}>
      <div style={{width:"20px", height: "1.5px", backgroundColor : "black", margin:"6px 5px",lineHeight:"-1px"}}></div>
    <div style={{width:"20px", height: "1.5px", backgroundColor : "black", margin:"6px 5px"}}></div>
    <div style={{width:"20px", height: "1.5px", backgroundColor : "black", margin:"6px 5px"}}></div>
    </div>
    <div id ="contents">
             <ul style={{fontWeight:"bold", fontSize:"18px", listStyleType:"none", float:"left", marginTop:"-30px",
              display:"inline"}}>Wireframes
             
                <li> <A href="index.html">Login</A></li>
                <li><A href="yurts.html">Dashboard</A> </li>
                <li> <A href="activities.html">Menu</A> </li>
                <li><A href="reservations.html" class="special">Prompt Update</A> </li>
                <li><A href="reservations.html" class="special">Prompt Translate</A> </li>
            </ul>
  </div>
    </Wrapper>
  );
}

export default Menu;
