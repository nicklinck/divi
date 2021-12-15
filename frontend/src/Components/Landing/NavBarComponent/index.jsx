import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            <Navbar.Brand style={{alignItems: "center"}}>
              <img className="photo" src="/images/logo3.png" alt="Logo" />
              <Link className="link" to={routes.landing}> DiviDAO </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                <Nav.Link className="link" href={routes.landing}> Home </Nav.Link >
                <Nav.Link className="link" href={routes.explore}> Explore </Nav.Link >
                <Nav.Link className="link" href={routes.propertyCreate}> Create </Nav.Link >
                <Nav.Link className="link" href={routes.signIn}>  About </Nav.Link >
                <img className="photo" src="/images/discord.png" alt="Logo" />
                <img className="photo" src="/images/twitter.png" alt="Logo" />
                <Button className="link" onClick={init} href={routes.signIn} > Connect </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default NavBarComponent;
