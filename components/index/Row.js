import PropTypes from 'prop-types'
import styles from './row.module.css'

function Row({number, unit , children}){
  return(
    <div className="row d-flex justify-content-center align-items-center py-4" data-aos="fade-up" data-aos-duration="1200">
      <div className="col-4">
        <div className={`text-warning ${styles.number}`}>{number}</div>
        <div className={styles.unit}>{unit}</div>
      </div>
      <div className="col-8 d-flex align-items-center">
        <div className={styles.explain}>{children}</div>
      </div>
    </div>
  )
}
Row.propTypes={
  number:PropTypes.string.isRequired,
  unit:PropTypes.string.isRequired,
  children:PropTypes.string.isRequired
}
export default React.memo(Row)

