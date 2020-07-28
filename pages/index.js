import Head from 'next/head'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import styles from '../styles/index.module.css'
import Header from '../components/Header'

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
        <div className={styles.heading1} data-aos="fade-up" data-aos-duration="1000">Inlab - vì cuộc sống tốt đẹp hơn cho người khiếm thị</div>
        <div className={styles.heading2}> Nền tảng nguồn lực cộng đồng về dữ liệu tiên phong tại Việt Nam</div>
        <Link href="/contactsale">
          <Button variant="warning" className={styles.button}>Bạn có dữ liệu cần được dán nhãn?</Button>
        </Link>  
        <Link href="/upload">
          <Button variant="dark" className={styles.button}>Đóng góp dữ liệu hỗ trợ chống covid19</Button>
        </Link> 
      </div>

      <div className={styles['second-big-div']}>
        <div className="bg2 d-flex flex-column justify-content-center align-items-center" id="second">
          <div className="heading-text text-warning" data-aos="fade-right" data-aos-duration="1200">GIỚI THIỆU</div>
          <div className="content text-white text-wrap text-justify pt-4  " data-aos="fade-left" data-aos-duration="1200">
            &emsp;&emsp;Nền tảng nguồn lực cộng đồng (Crowd Sourcing) là nền tảng hỗ trợ các cá nhân, tổ chức, doanh nghiệp hoàn thành công việc, nhiệm vụ bằng cách cộng tác với lực lượng lao động bên ngoài (ví dụ: dán nhãn dữ liệu, xác thực thông tin, khảo sát nhanh, ...)
            <br />
                &emsp;&emsp;Nền tảng này sẽ trở thành trợ thủ đắc lực cho các cá nhân, nhà phát triển, công ty, tổ chức cần nhiều dữ liệu để đẩy mạnh việc nghiên cứu, thử nghiệm và phát triển các mô hình học máy
          </div>
        </div>
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
