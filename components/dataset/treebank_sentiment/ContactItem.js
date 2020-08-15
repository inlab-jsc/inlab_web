import PropTypes from 'prop-types'
import styles from './contact-item.module.css'

function ContactItem({imgSrc, title, detail}){
  return(
    <div className={`${styles['contact-item']} ${styles['show-flex']}`} data-aos="fade-right">
      <img src={imgSrc} className={styles['contact-icon']} />
      <div className={styles['contact-text']}>
        <h6>{title}</h6>
        <div>{detail}</div>
      </div>
    </div>
  )
}

ContactItem.propTypes={
  imgSrc:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  detail:PropTypes.string.isRequired,
}
export default React.memo(ContactItem)

