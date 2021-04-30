import React, { Component } from 'react';
import MenuService from '../../services/MenuService';
import Card from 'react-bootstrap/Card'
// import CardColumns from 'react-bootstrap/CardColumns'

export default class MenuCard extends Component {


    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            id: 21,
            name: 'loading...',
            description: 'loading...',
            // price: props.item.price,
            // menuCategory: props.item.menuCategory,
            // show: true
        }
    }


    componentDidMount() {
        //alert(this.state.id);
        MenuService.findById(21).then((response) => {
            console.log('------------');
            console.log(response);
            if (response !== undefined && response.status === 200) {
                this.setState({
                    name: response.data.name,
                    description: response.data.description,
                    // price: response.data.price,
                    // menuItems: response.data.menuItems,
                    // show: true
                })
            }
        });
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    prueba de servicio 1<br />
                    {this.state.id}<br />
                    {this.state.name}<br />
                    {this.state.description}<br/>
                </Card.Body>
            </Card>);
    }


}