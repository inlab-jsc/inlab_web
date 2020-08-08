import PropTypes from 'prop-types'
import styles from './dataset-item.module.css'

function DatasetItem({imgSrc, name, author, time, location, dataProvided, annotation}){
  return(
    <tr className="single-dataset">
      <th className={styles['dataset-content']}>
        <img src={imgSrc} alt="logo" className={styles['table-logo']} />
        <div>
          <div className={styles.name}>{name}</div>
          <div className={`${styles.author} ${styles['text-secondary']}`}>by {author}</div>
        </div>
      </th>
      <th>{time}</th>
      <th>{location}</th>
      <th>{dataProvided}</th>
      <th>{annotation}</th>
    </tr>
  )
}

DatasetItem.propTypes={
  imgSrc:PropTypes.string,
  name:PropTypes.string.isRequired,
  author:PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string,
  dataProvided: PropTypes.string.isRequired,
  annotation: PropTypes.string.isRequired,
}
export default React.memo(DatasetItem)

