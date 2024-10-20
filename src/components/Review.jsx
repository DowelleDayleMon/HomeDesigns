import styles from '../css/Review.module.css'
import Review1 from '../assets/Review1.jpg'

const Review = (props) => {
    return(
        <div className={styles.Review}>
            <div className={styles.Review_inner}>
                <img src={props.Person} />
                <span>{props.Name}</span>
            </div>
            <p>"{props.Feedback}"</p>
        </div>
    )
}

export default Review;