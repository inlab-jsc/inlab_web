/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function App({ Component, pageProps }) {
  React.useEffect(()=>{
    AOS.init();
  },[])
  React.useEffect(()=>{
    AOS.refresh();
  })
  return <Component {...pageProps} />;
};