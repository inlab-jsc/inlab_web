import Head from 'next/head'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import styles from '../styles/index.module.css'
import Header from '../components/Header'
import Row from '../components/index/Row'
import Column from '../components/index/Column'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Giới thiệu - Inlab</title>
        <link rel="icon" type="image/png" href="images/logoInlabSquare.png" />
      </Head>
      <Header />
      <div className={styles['first-big-div']}>
        <img className={styles.blindimg} src="images/undraw_pedestrian_crossing_l6jv.png" alt="" />
        <p className={`${styles.text} ${styles.heading1}`} data-aos="fade-up" data-aos-duration="1000">Inlab - vì cuộc sống tốt đẹp hơn cho người khiếm thị</p>
        <p className={`${styles.text} ${styles.heading2}`}> Nền tảng nguồn lực cộng đồng về dữ liệu tiên phong tại Việt Nam</p>
        <Link href="/contactsale">
          <Button variant="warning" className={styles.button}>Bạn có dữ liệu cần được dán nhãn?</Button>
        </Link>  
        <Link href="/upload">
          <Button variant="dark" className={styles.button}>Đóng góp dữ liệu hỗ trợ chống covid19</Button>
        </Link> 
      </div>

      <div className={styles['gioi-thieu']}>
        <p className={`${styles.text} ${styles.heading3}`} data-aos="fade-right" data-aos-duration="1200">GIỚI THIỆU</p>
        <p className={`${styles.text} ${styles.p1}`} data-aos="fade-left" data-aos-duration="1200">
          &emsp;&emsp;Nền tảng nguồn lực cộng đồng (Crowd Sourcing) là nền tảng hỗ trợ các cá nhân, tổ chức, doanh nghiệp hoàn thành công việc, nhiệm vụ bằng cách cộng tác với lực lượng lao động bên ngoài (ví dụ: dán nhãn dữ liệu, xác thực thông tin, khảo sát nhanh, ...)
          <br />
          &emsp;&emsp;Nền tảng này sẽ trở thành trợ thủ đắc lực cho các cá nhân, nhà phát triển, công ty, tổ chức cần nhiều dữ liệu để đẩy mạnh việc nghiên cứu, thử nghiệm và phát triển các mô hình học máy
        </p>
      </div>

      <div className={styles['van-de']}>
        <p className={styles.heading4} data-aos="fade-up" data-aos-duration="1200">VẤN ĐỀ</p>
        <div className={styles['row-wrapper']}>
          <Row number="6.2" unit="triệu người">Theo báo cáo điều tra dân số của Tổng cục Thống kê công bố tháng 1 năm 2019, Việt Nam có 6.2 triệu người khuyết tật từ 2 tuổi trở lên, chiếm 7.06% tổng dân số</Row>
          <Row number="1.03" unit="triệu người">Trong số những người khuyết tật kể trên, có 1.03 triệu người bị khuyết tật thị lực (khiếm thị)</Row>
          <Row number="9.000" unit="người">Tính đến thời điểm hiện tại, toàn quốc có 9.000 người khiếm thị biết sử dụng điện thoại thông minh và máy vi tính</Row>    
        </div>
      </div>

      <div className={styles['ung-dung']}>
        <p className={styles.heading4} data-aos="zoom-in" data-aos-duration="1200">ỨNG DỤNG</p>

        <div className={styles['column-wrapper']}>
          <Column imgSrc="images/audio.png">Dán nhãn dữ liệu </Column>
          <Column imgSrc="images/micro.png">Tạo dữ liệu âm thanh để tổng hợp giọng nói</Column>
          <Column imgSrc="images/speak.png">Tạo văn bản dạng hội thoại</Column>   
        </div>
      </div>
      <div className="bg-warning">
        <div className={styles.heading5}>Bạn có dữ liệu cần dán nhãn?</div>
        <Link href="/contactsale">
          <Button variant="dark" className={styles.button} size="lg"> Liên hệ chúng tôi</Button>
        </Link>            
      </div> 
      <style jsx global>
        {`
        html,
        body {
          padding: 0;
          margin: 0;
          text-align:center;
          color:#343a40;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}
      </style>
    </div>
  )
}
