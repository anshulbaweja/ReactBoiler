import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.25em 1em;
  width:100%;
  line-height: 200%;
  margin: 0;
  background-color: blue;
  text-decoration: none;
  border-radius: 6px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 20px;
  border: 2px solid #41addd;
  color: #FFFFFF;
  float: right;
    padding: 6px;
    border: none;
    margin-top: 8px;
    font-size: 27px;
 
  // input {
  //   float: right;
  //   padding: 6px;
  //   border: none;
  //   margin-top: 8px;
  //   margin-right: 16px;
  //   font-size: 17px;
  // }

  &:active {
    background: #41addd;
    color: #fff;
  }
`;
