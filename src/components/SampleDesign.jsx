import styles from '../css/SampleDesign.module.css'

const SampleDesign = (props) => {
    return(
        <div className={styles.SampleDesign}>
            <img src={props.DesignImg} />
            <span>{props.DesignName}</span>
        </div>
    )
}

export default SampleDesign;