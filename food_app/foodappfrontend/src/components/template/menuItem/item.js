import React, { Component } from 'react';
// import Table from 'react-bootstrap/Table'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';
// import Button from 'react-bootstrap/Button'
// import Image from 'react-bootstrap/Image';

export default class Item extends Component {

    defaultSorted = [{
        dataField: 'name',
        order: 'asc'
    }];

    constructor(props) {
        super(props);
        this.state = {
            columns: [{
                dataField: 'id',
                text: 'Product ID',
                sort: true
            }, {
                dataField: 'name',
                text: 'Product Name',
                sort: true
            }, {
                dataField: 'price',
                text: 'Product Price',
                sort: true,
                formatter: this.priceFormatter
            }],

            products: [{
                id: '109',
                name: '9Product Name',
                price: '25.95'
            }, {
                id: '1288',
                name: '3Product Name',
                price: '79.90'
            }, {
                id: '1555',
                name: '1Product Name',
                price: '15.99'
            }]
        }
    }

    componentDidMount() {
        // checkToken()
        //    .then(() => this.setState({ loading: false });

    }

    priceFormatter(cell, row) {
        console.log(row)
        return (

            <span>
                <strong style={{ color: 'green' }}>${row.price} </strong>
            </span>
        );
    }

    beforeSaveCell(oldValue, newValue, row, column, done) {
        setTimeout(() => {
            if (!alert('Do you want to accep this change?')) {
                done(true);
            } else {
                done(false);
            }
        }, 0);
        return { async: true };
    }

    render() {
        return (<BootstrapTable keyField='id'
            bootstrap4
            data={this.state.products}
            columns={this.state.columns}
            defaultSorted={this.defaultSorted}
            caption="Menu tal de cual"
            pagination={paginationFactory()}
            cellEdit={cellEditFactory({
                mode: 'click',
                blurToSave: true,
                beforeSaveCell : this.beforeSaveCell
            })}
            striped
            hover
            condensed />)
    }


}