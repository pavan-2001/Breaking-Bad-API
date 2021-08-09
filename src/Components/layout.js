import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";
import NavLink from "@material-tailwind/react/NavLink";
import NavbarInput from "@material-tailwind/react/NavbarInput";
import Icon from "@material-tailwind/react/Icon";
import { Typography } from "@material-ui/core";

export default class Layout extends React.Component {
  constructor(props) {
      super(props);
      this.setSearchText = this.setSearchText.bind(this);
  }

  setSearchText(e) {
    this.props.searchText = e.target.value; 
  }

  render() {
    
    return (
        <Navbar color="cyan" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <NavbarBrand>
                        <Typography type="h1">Breaking Bad</Typography>
                    </NavbarBrand>
                </NavbarWrapper>
    
                <NavbarCollapse open={true}>
                    <Nav right>
                    <NavbarInput type="text" placeholder="Search here" value={this.props.searchText} onChange={this.props.onChangeSearchText.bind(this)} />
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
      );
  }
}
