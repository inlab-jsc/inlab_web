import Head from 'next/head'
import styles from "@styles/info.module.css"
import Header from "@components/Header";
import FormField from '../components/contactsale/FormField';
import InterestCheckbox from '../components/contactsale/InterestCheckbox';

export default function ContactSale(){
  return (
    <>
      <Head>
        <title>Contact Us - Inlab</title>
        <link rel="icon" type="image/png" href="/images/logoInlabSquare.png" />
      </Head>

      <Header />
      {/* <!-- First part --> */}
        <div class="heading-text text-warning text-center pt-5">LIÊN HỆ VỚI CHÚNG TÔI</div>
        <div class="overlay" >                
          
        {/* <!-- Fifth part --> */}
        <div  class="d-flex flex-column align-items-center">
            <div class="text-center pt-3 content">Bạn có thể liên lạc với chúng tôi qua</div>
            <div class=" d-flex flex-column justify-content-center justify-content-around pt-5">
              <div class="row" data-aos="fade-up" data-aos-duration="1200">
                <div class="col-4 d-flex flex-column justify-content-center align-items-center" >
                  <img href="" src="/img/facebook.png" class="image" />
                  <a href="https://www.facebook.com/inlabtechnology/" class="h4 pt-3 ">Inlab Fanpage </a>
                </div>
                <div class="col-4 px-5 d-flex flex-column justify-content-center align-items-center" >
                  <img href="" src="/img/gmail.png" class="image" />
                  <a class="h4 pt-3" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=lienhe@inlab.com.vn" target="">lienhe@inlab.com.vn</a>
                </div>
                <div class="col-4 d-flex flex-column justify-content-center align-items-center" >
                  <img href="" src="/img/apple.png" class="image" />
                  <a href="" class="h4 pt-3 ">0902425586</a>
                </div>
                </div>
            </div>

            </div>

            <div class="text-center pt-5 content">Hãy để lại thông tin để chúng tôi có thể trao đổi với bạn</div>
            <form class="form-width" action="/contact" method="POST" id="contactForm">
              <div class="text-center message"></div>
              <FormField title="Tên" icon="account_box" />
              <FormField title="Công ty" icon="work" />
              <FormField title="Số điện thoại" icon="phone" />
              <FormField title="Email" icon="email" />
              <div class="pt-3">Chủ đề bạn quan tâm:</div>
            <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <InterestCheckbox title="Image Classification" value="image-classification" />
                    <InterestCheckbox title="Image Object Detection" value="image-object-detection" />
                    <InterestCheckbox title="Image Key Points" value="image-key-points" />
                    <InterestCheckbox title="Image segmentation" value="image-segmentation" />
                    <InterestCheckbox title="Image Ellipse" value="image-ellipse" />
                    <InterestCheckbox title="Image Polygons" value="image-polygons" />
                    <InterestCheckbox title="Text Named Entity Recognition" value="text-named-entity-recognition" />
                  </div>
                  <div class="col-sm">
                    <InterestCheckbox title="Text Sentiment Analysis" value="text-sentiment-analysis" />
                    <InterestCheckbox title="Dialogue Analysis" value="dialog-analysis" />
                    <InterestCheckbox title="Audio Transcription" value="audio-transcription" />
                    <InterestCheckbox title="Audio Classification" value="audio-classification" />
                    <InterestCheckbox title="Audio Regions" value="audio-regions" />
                    <InterestCheckbox title="Video Classifier" value="video-classifier" />
                    <InterestCheckbox title="Pairwise Comparison" value="pairwise-comparison" />
                  </div>
                </div>
              </div>

            <div class="form-group pt-5">
              <label for="exampleFormControlTextarea1" >Nội dung</label>
               <textarea name="content" class="jsx-2649193108" ></textarea></div>


            <div class ="justify-content-center d-flex pb-5">        
                <button type="submit" id="submit" class="contact btn btn-warning btn-lg btn-block">Gửi</button><br /><br />
              </div> 
              </form>
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