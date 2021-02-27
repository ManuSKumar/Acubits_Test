import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap';



class Header extends Component {
    constructor() {
        super();
        this.state = {
            serchKey: ''
        }
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/"><i class="fas fa-shield-virus" style={{ fontSize: '60px' }}></i></Navbar.Brand>
                <Navbar.Brand href="#home">Covid-19 Data</Navbar.Brand>
                <Nav className="mr-auto"/>
                <Form inline class="mr-auto">
                    <FormControl type="text" placeholder="Search" onChange={(event)=>this.setState({serchKey:event.target.value})} value={this.state.serchKey } className="mr-sm-2" />
                    <Button variant="outline-info" onClick={()=>this.props.onSerchKeyUpdate(this.state.serchKey)}>Search</Button>
                </Form>
            </Navbar>
        )
    }
}
export default Header;
