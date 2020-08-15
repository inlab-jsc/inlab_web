import PropTypes from 'prop-types'
import styles from './column.module.css'

function Column({imgSrc, primaryText, subText=''}){
  return(
    // <div className={`col ${styles.col}`} data-aos="zoom-in" data-aos-duration="1200">
    //   <img src={imgSrc} className={styles.image} alt="" />
    //   <div className={styles.text}>{children}</div>
    // </div>
    <div className={styles['intro-item']} data-aos="fade-up">
    <img className={styles['treebank-icon']} src={imgSrc}/>
    <div className={styles['text-secondary']}>{primaryText}</div>
    <div className={styles['intro-item-sub']}>{subText}</div>
  </div>
  )
}

Column.propTypes={
  imgSrc:PropTypes.string.isRequired,
  primaryText:PropTypes.string,
  subText: PropTypes.string,
}
export default React.memo(Column)

