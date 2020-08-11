import Head from 'next/head'
import styles from "@styles/info.module.css"
import Header from "@components/Header";

export default function DataSet(){
  return(
    <>
      <Head>
        <title>About Us - Inlab</title>
        <link rel="icon" type="image/png" href="/images/logoInlabSquare.png" />
      </Head>

      <Header />

      <div className={`${styles['intro-box']} d-flex align-items-center justify-content-around`}>
        <div>
          <a href="#overall-box" className="d-flex">
            <h2>VỀ CHÚNG TÔI</h2>
            <img src="/images/play-button.svg" alt="" className={styles['play-icon']} />
          </a>
          <div className={styles['intro-box-line']} />
        </div>
        <img className={styles['intro-img']} src="/images/undraw_team_spirit.svg" alt="About Us" />
      </div>   

      <div id="overall-box" className={styles['overall-box']} data-aos="fade-up">
        <h3>TỔNG QUAN</h3>
        <div className={styles['divide-line']} />
        <p>
          <b>&ensp;INLAB&ensp;</b>
          là nền tảng hoạt động dựa trên hình thức crowdsourcing và được thể hiện dưới dạng một bảng tin việc làm.
        </p>
        <p>
          Tính năng chính của 
          <b>&ensp;INLAB&ensp;</b>
          là hỗ trợ các requester (các cá nhân và tổ chức có nhu cầu về dữ liệu) thu thập dữ liệu và tìm kiếm nguồn nhân lực xử lý dữ liệu thông qua việc đăng tải các công việc lên hệ thống, đồng thời cung cấp công cụ giúp đơn giản hóa và tăng hiệu suất quá trình thu thập, xử lý dữ liệu của các workers (lực lượng xử lý dữ liệu).
        </p>
      </div>

      <div className={`${styles["card-container"]} d-flex justify-content-around`}>
        <div className={styles['info-left-card']} data-aos="flip-left">
          <div>
            <h4>TẦM NHÌN</h4>
            <div className={styles['divide-line']} />
          </div>
          <p>Trở thành nền tảng tiên phong cho việc kiến tạo dữ liệu đầu tiên  tại Việt Nam.</p>
        </div>
        <div className={styles['info-right-card']} data-aos="flip-right">
          <div>
            <h4>SỨ MỆNH</h4>
            <div className={styles['divide-line']} />
          </div>
          <p>Hỗ trợ nguồn lực cho các cá nhân và tổ chức có nhu cầu về dữ liệu, đồng thời tạo ra các việc làm liên quan đến dữ liệu cho mọi đối tượng cho xã hội.</p>
        </div>
      </div>

      <div className={styles['story-container']}>
        <h4>CÂU CHUYỆN INLAB</h4>
        <div className={styles['story-container-line']} />

        <div className={`${styles['story-box']} d-flex`} data-aos="fade-right">
          <p className={styles['story-text']}>
            Đầu năm 2020, dự án 
            <b>&ensp;INLAB&ensp;</b> 
            bắt đầu từ ý tưởng giúp người khiếm thị được tiếp cận nhiều hơn với một ngành nghề mới trong thời đại 4.0. Với sự hỗ trợ của Viện Công nghiệp phần mềm và nội dung số Việt Nam phối hợp Hội người mù Việt Nam, InfoRe Technology, HMD Technology, các cộng tác viên đang học tập, nghiên cứu trong nước và quốc tế, 
            <b>&ensp;INLAB&ensp;</b> 
            đã hỗ trợ được rất nhiều người khiếm thị tiếp cận với các công nghệ mới, thực hiện các công việc liên quan đến công nghệ số nhằm phát huy khả năng của bản thân, cải thiện cuộc sống, hòa nhập, tham gia bình đẳng vào các hoạt động kinh tế - xã hội, và góp phần xây dựng đất nước.
          </p>
          <div className={styles['story-img']}>
            <img src="/images/info-1.jpg" width="100%" alt="" />
            <p>Hình ảnh buổi gặp mặt giữa các thành viên dự án INLAB với Hội người mù Việt Nam ngày 18/12/2019</p>
          </div>
        </div>

        <div className={`${styles['story-box']} d-flex`} data-aos="fade-left">
          <div className={styles['story-img']}>
            <img src="/images/info-2.jpg" width="100%" alt="" />
            <p>Giám đốc Inlab Nguyễn Đinh Mậu tham gia Lễ khai giảng khoá đào sử dụng phần mềm Dán nhãn dữ liệu Inlab được tổ chức bởi Hội người mù Việt Nam</p>
          </div>
          <p className={styles['story-text']}>
            Từ ý tưởng đó, 
            <b>&ensp;INLAB&ensp;</b> 
            nhận thấy nhu cầu được hỗ trợ nguồn lực của các cá nhân và tổ chức có nhu cầu về dữ liệu cũng như nhu cầu việc làm của đông đảo các đối tượng trong xã hội. Vì thế, chúng tôi đã quyết định trở thành 
            <b>&ensp;một trong những nền tảng đầu tiên tại Việt Nam hoạt động trong lĩnh vực kết nối các cá nhân, tổ chức có nhu cầu thu thập và xử lý dữ liệu với nguồn nhân lực đa dạng và chất lượng.&ensp;</b>
          </p>
        </div>

        <div className={`${styles['story-box']} d-flex`} data-aos="fade-right">
          <p className={styles['story-img']}>
            Ngày 15/06/2020, Công ty Cổ phần 
            <b>&ensp;INLAB&ensp;</b> 
            được thành lập với mục đích đáp ứng nhu cầu về nguồn lực của các cá nhân và tổ chức có nhu cầu về dữ liệu cũng như vấn đề việc làm cho một bộ phận không nhỏ người dân. Và từng ngày trôi qua, chúng tôi vẫn luôn gắn chặt với mục tiêu to lớn này.
          </p>
          <div className={styles['story-img']}>
            <img src="/images/info-3.jpg" width="100%" alt="" />
            <p>Nhân lực INLAB cung cấp đều được đào tạo một cách bài bản</p>
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
    </>
  )
}