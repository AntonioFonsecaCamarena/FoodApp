import React,{Component} from 'react';
import MenuItemService from '../../services/MenuItemService';

export class AddMenuItemComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            name:'',
            description:'',
            price:''
        }
    }


    handleNameChange = (event)=>{
        this.setState({
            name: event.target.value
        })
    }

    handleDescriptionChange = (event)=>{
        this.setState({
            description: event.target.value
        })
    }

    handlePriceChange = (event)=>{
        this.setState({
            price: event.target.value
        })
    }
    
    handleSubmit = event =>{
        MenuItemService.saveNewMenuItem(this.state);
         //event.preventDefault();
    }

    render(){
        return (
          <form onSubmit={this.handleSubmit}>
            <div>
                <h3 className="text-center">Add Menu Item:</h3>
                <label>Nombre:</label><input type='text' value={this.state.name} onChange={this.handleNameChange}></input>
                <label>Descripcion:</label><input type='text' value={this.state.description} onChange={this.handleDescriptionChange}></input>
                <label>Price:</label><input type='number' value={this.state.price} onChange={this.handlePriceChange}></input>
                {/* <label>Category:</label><input type='text'></input> */}
                <button type='submit'>Guardar</button>
            </div>
            </form>
        )
    }

}

