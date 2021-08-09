import React from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";

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
                        <div className="text-lg font-weight-bold font-lg">
                            Breaking Bad
                        </div>
                    </NavbarBrand>
                </NavbarWrapper>
    
                <NavbarCollapse open={true}>
                    <Nav right>
                    
                    <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search" value={this.props.searchText} onChange={this.props.onChangeSearchText.bind(this)}>
                    </input>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
      );
  }
}
