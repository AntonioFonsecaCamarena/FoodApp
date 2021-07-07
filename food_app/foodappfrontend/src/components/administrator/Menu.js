import { Card } from 'react-bootstrap';
import styles from './Menu.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import featuredImage04 from '../../assets/img/gallery_07.jpg';

const Menu = (props) => {
    //Getting all Menu Categories from a User
    console.log('Menu Component');
    console.log(props);

    return <Card className={styles.menuCard}>
        <Card.Img src={featuredImage04} variant="bottom" className={styles.menuImg} />
        <Card.Body className={styles.menuContent}>
            <Card.Title className={styles.menuTittle}>{props.data.name}</Card.Title>
            <Card.Text className={styles.menuDescription}>{props.data.description}</Card.Text>
        </Card.Body>
    </Card >
}


export default Menu;