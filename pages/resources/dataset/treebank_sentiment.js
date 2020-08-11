import Head from 'next/head'
import styles from '../../../styles/treebank-sentiment.module.css'
import Header from '../../../components/Header'

export default function Dataset() {
  return (
    <div>
      <Head>
        <title>Dataset - Inlab</title>
        <link rel="icon" type="image/png" href="images/logoInlabSquare.png" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&amp;display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <div id="treebank-body">
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
            <img src='/images/sentiment-header.svg' className="sentiment-header"/>
          </div>
        </div>
        <div style={{width: '100px'}}></div>

        <div className="treebank-box">
          <h3 className="title">Đây là bộ dữ liệu gì?</h3>
          <div className="yellow-line"></div>
          <div className="show-flex intro-item-container">
            <div className="intro-item" data-aos="fade-up">
              <img className="treebank-icon" src="/images/sentiment-icon-computer.svg"/>
              <div className="text-secondary">90,000 câu</div>
              <div className="intro-item-sub">được phân tích thành các từ/cụm từ và ghi điểm sắc thái</div>
            </div>
            <div className="intro-item" data-aos="fade-up">
              <img className="treebank-icon" src="/images/sentiment-icon-content.svg"/>
              <div className="text-secondary">Chủ đề đa dạng</div>
              <div className="intro-item-sub">như văn hóa, kinh tế, giáo dục, lịch sử, ...</div>
            </div>
            <div className="intro-item" data-aos="fade-up">
              <img className="treebank-icon" src="/images/sentiment-icon-tablet.svg"/>
              <div className="text-secondary">Nguồn dữ liệu xác thực</div>
              <div className="intro-item-sub">được tổng hợp từ các báo điện tử và các trang thông tin trên Facebook</div>
            </div>
          </div>
        </div>
   
        {/* QuickInfo Box */}
        <div className="dataset-quickinfo treebank-box show-flex">
          <img src="/images/sentiment-img.svg" width="400px" height="400px" />
          <div className="quickinfo-text" data-aos="fade-left">
            <h3 className="title">Ứng dụng của bộ dữ liệu</h3>
            <div className="yellow-line"></div>
            <div>Từ việc phân tích sắc thái của một từ đơn lẻ, ta có thể...</div>
            <ul className="left-padding">
              <li>Phát triển lên thành sơ đồ cây phân tích sắc thái của câu</li>
              <li>Phân tích sắc thái của một văn bản dựa trên sắc thái của các câu trong văn bản</li>
              <li>Phân loại văn bản</li>
            </ul>
          </div>
        </div>

        {/* Chart Box */}
        <div className="treebank-box">
          <h3 className="title">Thống kê nội dung bộ dữ liệu</h3>
          <div className="yellow-line"></div>
          <div className="chart-container">
            <div id="sentimentScore" className="chart" style={{gridArea: 'pie1'}} data-aos="fade-up"></div>
            <div id="wordNumInSenc" className="chart" style={{gridArea: 'pie2'}} data-aos="fade-up"></div>
            <div id="totalSentimentWord" className="chart" style={{gridArea: 'pie3'}} data-aos="fade-up"></div>
          </div>
        </div>

        {/* Detail Box */}
        <div id="detail-box" className="show-flex">
          <div id="right-panel" className="treebank-box right-panel">
            <h2 id="right-panel-button-container" className="overall text-primary show-flex">
              <div className="right-panel-button pointer">Sample</div>
            </h2>
            <div id="right-panel-detail"></div>
          </div>
        </div>

        {/* Contact Us */}
        <div id="contact-us-box" className="show-flex">
          <div id="our-info">
            <h3>Thông tin liên lạc</h3>
            <div className="yellow-line"></div>
            <div id="contact-container">
              <div className="contact-item show-flex" data-aos="fade-right">
                <div id="location-icon" className="contact-icon"></div>
                <div className="contact-text">
                  <h6>Địa chỉ</h6>
                  <div>Số 12 ngõ 293 Khuất Duy Tiến, Hà Nội</div>
                </div>
              </div>
              <div className="contact-item show-flex" data-aos="fade-right">
                <div id="phone-icon" className="contact-icon"></div>
                <div className="contact-text">
                  <h6>Điện thoại</h6>
                  <div>0902425586</div>
                </div>
              </div>
              <div className="contact-item show-flex" data-aos="fade-right">
                <div id="mail-icon" className="contact-icon"></div>
                <div className="contact-text">
                  <h6>Email</h6>
                  <div>lienhe@inlab.com.vn</div>
                </div>
              </div>
              <div className="contact-item show-flex" data-aos="fade-right">
                <div id="facebook-icon" className="contact-icon"></div>
                <div className="contact-text">
                  <h6>Fanpage</h6>
                  <div>Inlab.fanpage</div>
                </div>
              </div>
            </div>
          </div>  
        </div>  
      
        

        <div id="contact-us-form" data-aos="fade-left">
          <h3 id="interested">Bạn có hứng thú với bộ dữ liệu này?</h3>
          <div className="text-tertiary">Hãy để lại thông tin liên hệ để được tư vấn nhanh nhất</div>
          <form className="form-width" action="/contact" method="POST" id="contactForm">
            <div className="text-center message"></div>
            <div id="form-group">
              <div className="form-group">
                <label for="exampleFormControlInput1">Tên</label>
                <div className="d-flex align-items-center jsx-560990836 jsx-2177858300 input input--icon">
                <input type="Name" name="name" id="exampleFormControlInput1" required="" placeholder="Họ và tên" value="" style={{width:'100%',border: 'none', backgroundColor: '#F5F4F9'}} required />                       
                </div>   
              </div>
              <div className="form-group">
                  <label for="exampleFormControlInput1">Công ty</label>
                  <div className="d-flex align-items-center jsx-560990836 jsx-2177858300 input input--icon"> 
                  <input type="Name" name="company" id="exampleFormControlInput1" placeholder="Tên công ty" value="" style={{width:'100%',border: 'none', backgroundColor: '#F5F4F9'}} required />                       
                  </div>   
              </div>
              <div className="form-group">
                  <label for="exampleFormControlInput1">Số điện thoại</label>
                  <div className="d-flex align-items-center jsx-560990836 jsx-2177858300 input input--icon">
                  <input type="Name" name="phone" id="exampleFormControlInput1" placeholder="Số điện thoại" value="" style={{width:'100%',border: 'none', backgroundColor: '#F5F4F9'}} required />                       
                  </div>   
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <div className="d-flex align-items-center jsx-560990836 jsx-2177858300 input input--icon">
                  <input  type="email" name="email" id="exampleFormControlInput1" placeholder="Email" value="" style={{width:'100%',border: 'none', backgroundColor: '#F5F4F9'}} required />                       
                </div>                  
                <div className ="justify-content-center d-flex pb-5">        
                  <button type="submit" id="submit" className="contact btn btn-warning btn-lg btn-block">Gửi</button>
                  <br/><br/>
                </div> 
              </div>
            </div>
          </form>
        <a id="buy-now" type="button" href="/contactsale" className="btn-warning btn startbtn nav-item nav-link text-center mt-4 d-flex justify-content-center align-items-center contact-sale">GỬI THÔNG TIN LIÊN HỆ</a>
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

        @media screen and (max-width: 600px) {
          ul {
            margin-bottom: 0;
          }
        }
      `}
      </style>
    </div>
  )
}
