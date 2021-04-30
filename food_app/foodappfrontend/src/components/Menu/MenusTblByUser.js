import React, { Component } from 'react';
import MenuService from '../../services/MenuService';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';

export default class MenusTblByUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: 1, //TODO Get the userid by props
            columns: [{
                dataField: 'id',
                text: 'Id',
                sort: true
            }, {
                dataField: 'name',
                text: 'Nombre',
                sort: true
            }, {
                dataField: 'description',
                text: 'Descripcion',
                sort: false
            },
            {
                dataField: 'edit',
                text: 'Editar',
                sort: false
            }],

            menus: []
        }
    }

    componentDidMount() {
        MenuService.findByUserId(this.state.userId).then((response) => {
            if (response !== undefined && response.status === 200) {
                const menus = [];
                response.data.map((menu) =>
                    menus.push({
                        id: menu.id,
                        name: menu.name,
                        description: menu.description,
                        edit: '**** ',
                    }));
                this.setState({
                    menus: menus,
                })
            }
        });
    }

    defaultSorted = [{
        dataField: 'id',
        order: 'asc'
    }];

    beforeSaveCell(oldValue, newValue, row, column, done) {
        setTimeout(() => {
            if (!alert('¿Desdea conservar los cambios?')) {
                done(true);
            } else {
                done(false);
            }
        }, 0);
        return { async: true };
    }

    handleEdit() {
        alert('Edit');
    }

    handleDelete() {
        alert('Delete');
    }

    render() {
        return (<BootstrapTable keyField='id'
            bootstrap4
            data={this.state.menus}
            columns={this.state.columns}
            defaultSorted={this.defaultSorted}
            caption="Mis Menus"
            pagination={paginationFactory()}
            cellEdit={cellEditFactory({
                mode: 'click',
                blurToSave: true,
                beforeSaveCell: this.beforeSaveCell
            })}
            striped
            hover
            condensed />)
    }


}