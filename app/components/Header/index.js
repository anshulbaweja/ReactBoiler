import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import Menu from './Menu-Icon2.jpg';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <A href="https://twitter.com/mxstbr">
          <Img src="" alt="" />
        </A>
        <NavBar>
          <HeaderLink to="/">
          <Img src={Menu} alt="" />
            <FormattedMessage {...messages.home} />
            <div style={{border:"1px solid black", marginLeft:"19.1em",
            float:"right", padding:"0",textAlign:"right",fontSize:"20px"
          }} >abc@gmail.com</div>
          </HeaderLink>
          {/* <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink> */}
        </NavBar>
      </div>
    );
  }
}

export default Header;
