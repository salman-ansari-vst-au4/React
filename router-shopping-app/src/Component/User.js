import React, { Component } from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'


class User extends Component {
    render() {
        return (
            <BrowserRouter>

                <LinkContainer to={"/users/:" + this.props.name}>
                    <tr>
                        <th scope="row">{this.props.index}</th>
                        <td>{this.props.name}</td>
                        <td>{this.props.relation}</td>
                    </tr>
                </LinkContainer>

            </BrowserRouter >

        );
    }
}


export default User