import Head from 'next/head'
import styles from '@styles/treebank-sentiment.module.css'
import Header from '@components/Header'
import Column from '@components/index/Column'
import ContactItem from '@components/dataset/ContactItem'
import FormItem from '@components/dataset/FormItem'

export default function Dataset() {
  return (
    <div>
      <Head>
        <title>Treebank Sentiment - Inlab</title>
        <link rel="icon" type="image/png" href="images/logoInlabSquare.png" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <div id={styles['treebank-body']}>
        {/* Intro Box */}
        <div className={styles['dataset-intro']}>
          <div className={`${styles['treebank-box']} ${styles['show-flex']}`}>
            <div className={styles['intro-text']}>
              <h1>Vietnamese Stanford Treebank</h1>
              <div className={`${styles['text-secondary']} ${styles['light-text']}`}>Bộ dữ liệu phân tích sắc thái câu Tiếng Việt</div>
              <div className={styles['show-flex']}>
                <a type="button" href="/contactsale" className={`btn-warning btn startbtn nav-item nav-link text-center mt-4 d-flex justify-content-center align-items-center ${styles['sentiment-button']} ${styles['contact-sale']}`}>MUA NGAY</a>
                <a type="button" href="#right-panel" className={`btn btn-dark startbtn nav-item nav-link d-flex justify-content-center align-items-center ${styles['sentiment-button']}`}>XEM THÊM</a>
              </div>
            </div>
            <img src='/images/sentiment-header.svg' className={styles['sentiment-header']}/>
          </div>
        </div>

        <div className={styles['treebank-box']}>
          <h3 className={styles.title}>Đây là bộ dữ liệu gì?</h3>
          <div className={styles['yellow-line']}></div>
          <div className={`${styles['show-flex']} ${styles['intro-item-container']}`}>
            <Column imgSrc="/images/sentiment-icon-computer.svg" primaryText="90,000 câu" subText="được phân tích thành các từ/cụm từ và ghi điểm sắc thái" />
            <Column imgSrc="/images/sentiment-icon-content.svg" primaryText="Chủ đề đa dạng" subText="như văn hóa, kinh tế, giáo dục, lịch sử, ..." />
            <Column imgSrc="/images/sentiment-icon-tablet.svg" primaryText="Nguồn dữ liệu xác thực" subText="được tổng hợp từ các báo điện tử và các trang thông tin trên Facebook" />
          </div>
        </div>
   
        {/* QuickInfo Box */}
        <div className={`${styles['dataset-quickinfo']} ${styles['treebank-box']} ${styles['show-flex']}`}>
          <img src="/images/sentiment-img.svg" width="400px" height="400px" />
          <div className={styles['quickinfo-text']} data-aos="fade-left">
            <h3 className={styles.title}>Ứng dụng của bộ dữ liệu</h3>
            <div className={styles['yellow-line']}></div>
            <div>Từ việc phân tích sắc thái của một từ đơn lẻ, ta có thể...</div>
            <ul className={styles['left-padding']}>
              <li>Phát triển lên thành sơ đồ cây phân tích sắc thái của câu</li>
              <li>Phân tích sắc thái của một văn bản dựa trên sắc thái của các câu trong văn bản</li>
              <li>Phân loại văn bản</li>
            </ul>
          </div>
        </div>

        {/* Chart Box */}
        <div className={styles['treebank-box']}>
          <h3 className={styles.title}>Thống kê nội dung bộ dữ liệu</h3>
          <div className={styles['yellow-line']}></div>
          <div className={styles['chart-container']}>
            <div id={styles.sentimentScore} className={styles.chart} style={{gridArea: 'pie1'}} data-aos="fade-up"></div>
            <div id={styles.wordNumInSenc} className={styles.chart}  style={{gridArea: 'pie2'}} data-aos="fade-up"></div>
            <div id={styles.totalSentimentWord} className={styles.chart}  style={{gridArea: 'pie3'}} data-aos="fade-up"></div>
          </div>
        </div>

        {/* Detail Box */}
        <div id={styles['detail-box']} className={styles['show-flex']}>
          <div id={styles['right-panel']} className={`${styles['treebank-box']} ${styles['right-panel']}`}>
            <h2 id={styles['right-panel-button-container']} className={`${styles.overall} ${styles['text-primary']} ${styles['show-flex']}`}>
              <div className={`${styles['right-panel-button']} ${styles.pointer}`}>Sample</div>
            </h2>
            <div id={styles['right-panel-detail']}></div>
          </div>
        </div>

        {/* Contact Us */}
        <div id={styles['contact-us-box']} className={styles['show-flex']}>
          <div id={styles['our-info']}>
            <h3>Thông tin liên lạc</h3>
            <div className={styles['yellow-line']}></div>
            <div id={styles['contact-container']}>
              <ContactItem imgSrc="/images/location.svg" title="Địa chỉ" detail="Số 12 ngõ 293 Khuất Duy Tiến, Hà Nội" />
              <ContactItem imgSrc="/images/phone.svg" title="Điện thoại" detail="0902425586" />
              <ContactItem imgSrc="/images/mail.svg" title="Email" detail="lienhe@inlab.com.vn" />
              <ContactItem imgSrc="/images/facebook.svg" title="Fanpage" detail="Inlab.fanpage" />
            </div>
          </div>  
      

        <div id={styles['contact-us-form']} data-aos="fade-left">
          <h3 id={styles.interested}>Bạn có hứng thú với bộ dữ liệu này?</h3>
          <div className={styles['text-tertiary']}>Hãy để lại thông tin liên hệ để được tư vấn nhanh nhất</div>
          <form className={styles['form-width']} action="/contact" method="POST" id="contactForm">
            <div className={`${styles['text-center']} ${styles.message}`}></div>
            <div id={styles['form-group']}>
              <FormItem label="Tên" name="name" placeholderText="Họ và tên" />
              <FormItem label="Công ty" name="company" placeholderText="Tên công ty" />
              <FormItem label="Số điện thoại" name="phone" placeholderText="Số điện thoại" />
              <FormItem label="Email" name="email" placeholderText="Email" />
              <div className ="justify-content-center d-flex pb-5">        
                  <button type="submit" id="submit" className="contact btn btn-warning btn-lg btn-block">Gửi</button>
                  <br/><br/>
                </div> 
            </div>
          </form>
        {/* <a id="buy-now" type="button" href="/contactsale" className="btn-warning btn startbtn nav-item nav-link text-center mt-4 d-flex justify-content-center align-items-center contact-sale">GỬI THÔNG TIN LIÊN HỆ</a> */}
      </div>
    </div>
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

        h3 {
          font-size: 1.5rem !important;
        }

        @media screen and (max-width: 600px) {
          ul {
            margin-bottom: 0;
          }
        }

        input[type=email] {
          padding: 0 !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: 400 !important;
          margin-top: 0 !important;
        }
      `}
      </style>
    </div>
  )
}
