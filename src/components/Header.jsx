import styles from '../css/Header.module.css'

const Header = (props) => {
    return(
        <div className={styles.Header}>
          <div className={styles.Categories}>
            <span>{props.Upper}</span>
            <span>{props.Title}</span>
          </div>
          <span className={styles.Explain}>
            {props.Text}
          </span>
        </div>
    )
}

export default Header;