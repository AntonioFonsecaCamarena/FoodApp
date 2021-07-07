import { Card } from 'react-bootstrap';
import styles from './MenuItem.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import featuredImage04 from '../../assets/img/gallery_05.jpg';

const MenuItem = (props) => {
    //Getting all Menu Categories from a User
    console.log('Menu Item Component');
    console.log(props);

    return <Card className={styles.menuItemCard}>
        <Card.Img src={featuredImage04} variant="bottom" className={styles.itemImg} />
        <div className={styles.menuItemContent}>
            <Card.Body>
                <Card.Title className={styles.itemTittle}>{props.data.name}</Card.Title>
                <Card.Text className={styles.itemDescription}>{props.data.description}</Card.Text>
            </Card.Body>
            <Card.Footer className={`${styles.itemPrice} ${styles.cardFooter}`}>${props.data.price}</Card.Footer>
        </div>
    </Card >
}


export default MenuItem;