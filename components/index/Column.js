import PropTypes from 'prop-types'
import styles from './column.module.css'

function Column({imgSrc,children}){
  return(
    <div className={`col ${styles.col}`} data-aos="zoom-in" data-aos-duration="1200">
      <img src={imgSrc} className={styles.image} alt="" />
      <div className={styles.text}>{children}</div>
    </div>
  )
}

Column.propTypes={
  imgSrc:PropTypes.string.isRequired,
  children:PropTypes.string.isRequired,
}
export default React.memo(Column)

