import styles from '../css/Details.module.css'

const Details = (props) => {
    return(
        <div className={styles.Details}>
            <span>{props.Detail_top}</span>
            <span>{props.Detail_mid}</span>
            <span>{props.Detail_bottom}</span>
        </div>
    )
}

export default Details;