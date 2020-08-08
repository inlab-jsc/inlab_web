import Head from 'next/head'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import styles from '../../styles/resources-dataset.module.css'
import Header from '../../components/Header'
import DatasetItem from '../../components/dataset/DatasetItem'

export default function Dataset() {
  return (
    <div>
      <Head>
        <title>Dataset - Inlab</title>
        <link rel="icon" type="image/png" href="images/logoInlabSquare.png" />
      </Head>
      <Header />
      <h2 id={styles['dataset-header']} class="heading-text text-warning text-center">Dataset</h2>
      <div class={styles['table-wrapper']}>
        <table class={styles['table-container']}>
          <thead class={styles['resource-table-header text-primary']}>
            <tr>
              <th id={styles.dataset}>Dataset</th>
              <th id={styles.date}>Time</th>
              <th id={styles.location}>Location</th>
              <th id={styles['data-provided']}>Data Provided</th>
              <th id={styles.annotation}>Annotation</th>
            </tr>
          </thead>
          
          <tbody>
            <DatasetItem imgSrc="/img/logo.png" name="VST" author="Inlab Technology" time="2020" location="Vietnam" dataProvided="Treebank, Sentiment" annotation="Storing" />
            <DatasetItem imgSrc="/img/mai-vutran.jpg" name="Vietnamese Person Questions Dataset" author="Mai-Vu Tran" time="2012" location="Vietnam" dataProvided="Text" annotation="Text Labeling" />
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
        
        b {
          font-weight: 500;
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

        * {
          box-sizing: border-box;
        }
      `}
      </style>
    </div>
  )
}
