import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import routes from '../../../router/routeList';
import './styles.css';
import Web3 from "web3";
import React from 'react'
import {AuthContext} from "../../../providers/authProvider";


const NavBarComponent = () => {
	const {state, dispatch} = React.useContext(AuthContext)
	const init = async () => {
		if (window.ethereum?.isMetaMask) {
			const accounts = await window.ethereum.request({
				method: 'eth_requestAccounts'
			})
			const networkId = await window.ethereum.request({
				method: "net_version"
			})
			// 4 for testing 1 for mainnet
			// TODO: add contract, change to mainnet
			// for now we ll use a mock contract
			const contract = {
				abi: '123',
				address: 'test'
			}
			if (networkId == 1) {
				let web3 = new Web3(window.ethereum);
				dispatch({
					type: 'SET_ACCOUNT', payload: {
						...state,
						connected: true,
						account: accounts[0],
						contract: "#TODO"
						// contract: new web3.eth.Contract(contract.abi, contract.address)
					}
				})
			} else {
				dispatch({type: 'SET_ACCOUNT', payload: {...state, status: "You are on a different network."}})
			}
		} else {
			dispatch({type: 'SET_ACCOUNT', payload: {...state, status: "You need metamask."}})
		}
	}

	console.log(state)


	return (
		<div className="App">
			<header className="App-header">
				<Navbar bg="light" expand="lg">
					<Container>
						<Navbar.Brand>
							<Link className="link" to={routes.landing}> Divi Dao </Link>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav"/>
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link className="link" href={routes.landing}> Home </Nav.Link>
								<Nav.Link className="link" href={routes.explore}> Explore </Nav.Link>
								<Nav.Link className="link" onClick={init}> Sign In with Metamask </Nav.Link>
								{/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
								{/*  <NavDropdown.Item >Action</NavDropdown.Item>*/}
								{/*  <NavDropdown.Item >Another action</NavDropdown.Item>*/}
								{/*  <NavDropdown.Item >Something</NavDropdown.Item>*/}
								{/*  <NavDropdown.Divider />*/}
								{/*  <NavDropdown.Item >*/}
								{/*    <Link style={{"text-decoration": "none"}} to={routes.signIn}> Sign In </Link>*/}
								{/*  </NavDropdown.Item>*/}
								{/*</NavDropdown>*/}
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>
		</div>
	);
}

export default NavBarComponent;
