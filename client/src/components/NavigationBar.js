import React from "react";
import { useHistory } from "react-router-dom"
import {Navbar, Container, Nav} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'



function NavigationBar(props){ 
    const { currentUser, logout } = useAuth()
    const history = useHistory()
  

    const linkSet = []
    props.links.forEach(element => {
        linkSet.push(
            <Nav.Link key={element.title} href={element.link}>{element.title}</Nav.Link>
        )
    });

    async function handleLogout() {
          await logout()
          history.push("/login")
    }


    console.log( currentUser )
    function authActive(bool){
        if(bool){
            return(
                <Nav className="ml-auto text-end">
                    {!currentUser &&(
                        <Nav.Link href="/login">Login</Nav.Link>
                    )}
                    {currentUser &&(
                        <Nav.Link  onClick={handleLogout}>Logout</Nav.Link>
                    )}
                </Nav>
                )
        }else{
            return(
            <>
                <Nav className="ml-auto text-end">
                    <Nav.Link href="/login">Portal</Nav.Link>
                </Nav>
            </>
            )
        }
    }
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Dispatch App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                <Nav className="mr-auto">
                    {linkSet}
                </Nav>
                {authActive(props.authActive)}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar