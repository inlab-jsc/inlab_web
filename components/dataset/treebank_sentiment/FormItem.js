import PropTypes from 'prop-types'
import styles from './form-item.module.css'

function ContactItem({label, name, placeholderText}){
  return(
    <div className={styles['form-group']}>
      <label htmlFor="exampleFormControlInput1">{label}</label>
      <div className={`d-flex align-items-center jsx-560990836 input input--icon ${styles.input}`}>
        <input type="Name" name={name} id="exampleFormControlInput1" required="" placeholder={placeholderText} className={styles['form-item']} required />                       
      </div>   
    </div>
  )
}

ContactItem.propTypes={
  label:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  placeholderText:PropTypes.string.isRequired,
}
export default React.memo(ContactItem)

