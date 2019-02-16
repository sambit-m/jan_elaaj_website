import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle,
	DropdownMenu, DropdownItem } from 'reactstrap';

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false,
			isOpen: false
		};

		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		})
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		})
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	handleLogin(event) {
		this.toggleModal();
		event.preventDefault();
	}


	// handleLogout() { this.props.logoutUser(); }

	render() {
		return (
			//<React.Fragment></React.Fragment> -- long form
			//<> </> -- short form
			// returns a group of react elements, below is the short form
			<div className="container-fluid">
			<Navbar color="light" light expand="md" style={{ minHeight: 70 }}>
				<NavbarBrand href="/"> Jan Elaaj </NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/components/" style={navItem}> Home </NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/services/" style={navItem}> Services </NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/" style={navItem}> About </NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret style={navItem}> For Providers </DropdownToggle>
							<DropdownMenu right>
								<DropdownItem> Option 1 </DropdownItem>
								<DropdownItem> Option 2 </DropdownItem>
								<DropdownItem divider />
								<DropdownItem> Reset </DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
						<NavItem> <NavLink href="/login" style={{...navItem, ...loginButton}}> Login </NavLink> </NavItem>
						<NavItem> <NavLink href="/components/" style={navItem}> Signup </NavLink> </NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			</div>
		);
	};
}

const navItem = {
	marginLeft: 15,
	marginRight: 15
};

const loginButton = {
	backgroundColor: '#25a8e3',
	borderRadius: 20,
	paddingLeft: 22,
	paddingRight: 22,
	color: 'white',
	fontSize: 15,
	fontWeight: 'bold'
};

export default Header;