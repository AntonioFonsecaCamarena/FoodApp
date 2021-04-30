import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export default class MenuItemList extends Component {

    render() {
        return (<div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre del Menu</th>
                        <th>Fecha de creacion</th>
                        <th>Estado</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>plat 1</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><Button variant='warning'>Desactivar</Button><Button variant='danger'>Eliminar</Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td><Button variant='warning'>Desactivar</Button><Button variant='danger'>Eliminar</Button></td>                    </tr>
                    <tr>
                        <td>3</td>
                        <td >Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@mdo</td>
                        <td><Button variant='warning'>Desactivar</Button><Button variant='danger'>Eliminar</Button></td>                    </tr>
                </tbody>
            </Table>
        </div>);
    }


}