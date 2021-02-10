import React,{Component} from 'react';
import MenuItemService from '../services/MenuItemService';

export class MenuItemComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            menuItems:[]
        }
    }

    componentDidMount(){
        MenuItemService.getMenuItems().then((response)=>{
            this.setState({menuItems: response.data})
        });
    }

    render(){
        return (
          
            <div>
                <h1 className="text-center">Menu Items:</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td> Id</td>
                            <td> Name</td>
                            <td> Description </td>
                            <td> Price </td>
                            <td> Category </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.menuItems.map(
                                menuItem =>
                                <tr key = {menuItem.id}>
                                    <td>{menuItem.id}</td>
                                    <td>{menuItem.name}</td>
                                    <td>{menuItem.description}</td>
                                    <td>{menuItem.price}</td>
                                    <td>{menuItem.category}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}

