import { Card } from 'react-bootstrap';
import styles from './MenuCategory.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import featuredImage01 from '../../assets/img/featured-image-01.jpg';

const MenuCategory = (props) => {
    //Getting all Menu Categories from a User
    console.log('Menu Category Component');
    console.log(props);

    return <Card className={styles.menuCategoryCard}>
        <Card.Img src={featuredImage01} variant="bottom" className={styles.categoryImg} />
        <Card.Body className={styles.menuCategoryContent}>
            <Card.Title className={styles.categoryTittle}>{props.data.name}</Card.Title>
            <Card.Text className={styles.categoryDescription}>{props.data.description}</Card.Text>
        </Card.Body>
    </Card >
}

export default MenuCategory;