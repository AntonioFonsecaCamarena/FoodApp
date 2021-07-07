import { Button } from 'react-bootstrap';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import MenuCategoryContainer from './MenuCategoryContainer';
import MenuItemContainer from './MenuItemContainer';
import MenuContainer from './MenuContainer';

const AdministratorLanding = (props) => {

    return <Router>
        <div className='m-2'>
            <div className='row'>
                <div className='container col-4'>
                    <Link to='/categories'><Button>Editar Categorias</Button></Link>
                </div>
                <div className='container col-4'>
                    <Link to='/menuItems'><Button>Editar Platillos</Button></Link>
                </div>
                <div className='container col-4'>
                    <Link to='/menus'><Button>Menus</Button></Link>
                </div>
            </div>
            <div className='col-12'>
                <Switch>
                    <Route path='/categories'><MenuCategoryContainer /></Route>
                    <Route path='/menuItems'><MenuItemContainer /></Route>
                    <Route path='/menus'><MenuContainer /></Route>
                </Switch>
            </div>
        </div>
    </Router>
}

export default AdministratorLanding;