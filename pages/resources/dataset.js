import Head from 'next/head'
import styles from '@styles/resources-dataset.module.css'
import Header from '@components/Header'
import DatasetItem from '@components/dataset/DatasetItem'

export default function Dataset() {
  return (
    <div>
      <Head>
        <title>Dataset - Inlab</title>
        <link rel="icon" type="image/png" href="images/logoInlabSquare.png" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&amp;display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <h2 id={styles['dataset-header']} className="heading-text text-warning text-center">Dataset</h2>
      <div className={styles['table-wrapper']}>
        <table className={styles['table-container']}>
          <thead className={`${styles['resource-table-header']} ${styles['text-primary']}`}>
            <tr>
              <th id={styles.dataset}>Dataset</th>
              <th id={styles.date}>Time</th>
              <th id={styles.location}>Location</th>
              <th id={styles['data-provided']}>Data Provided</th>
              <th id={styles.annotation}>Annotation</th>
            </tr>
          </thead>
          
          <tbody>
            <DatasetItem 
              imgSrc="/images/logo.png" 
              name="VST" 
              author="Inlab Technology" 
              time="2020" location="Vietnam" 
              dataProvided="Treebank, Sentiment" 
              annotation="Storing" 
              href="/resources/dataset/treebank_sentiment"
            />
            <DatasetItem 
              imgSrc="/images/mai-vutran.jpg" 
              name="Vietnamese Person Questions Dataset" 
              author="Mai-Vu Tran" 
              time="2012" 
              location="Vietnam" 
              dataProvided="Text" 
              annotation="Text Labeling" 
              href="https://github.com/lupanh/Vietnamese-Person-Questions-Dataset"
            />
          </tbody>
        
        </table>
      </div>

      <style jsx global>
        {`
        body {
          margin: 0;
          font-family: 'IBM Plex Sans', sans-serif !important;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-weight: 100;
          font-size: 0.9rem;
        }

        tbody tr {
          background-color: white;
          -webkit-transition: 0.3s ease all;
          -webkit-transition: 0.3s ease all;
          transition: 0.3s ease all;
          cursor: pointer;
        }
        
        tbody tr:hover {
          background-color: #fae5b6;
          -webkit-transition: 0.3s ease all;
            -webkit-transition: 0.3s ease all;
            transition: 0.3s ease all;
        }
      `}
      </style>
    </div>
  )
}
