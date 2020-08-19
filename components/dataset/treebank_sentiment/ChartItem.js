import PropTypes from 'prop-types'
import styles from './chart-item.module.css'
import echarts from 'echarts'
import { useEffect } from 'react'

const colorSet = ['#f5b971', '#fdd998', '#ffecc7']

const option = (title, name, dataName, dataArr) => {
  return (
    {
      title: {
          text: title,
          bottom: '20',
          left: 'center',
          textStyle: {
            fontSize: 13,
            fontFamily: 'IBM Plex Sans',
          },
      },
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
          textStyle: {
            fontSize: 11,
            fontFamily: 'IBM Plex Sans',
          },
      },
      legend: {
          orient: 'vertical',
          left: 'left',
          data: dataName,
          textStyle: {
            fontSize: 11,
            fontFamily: 'IBM Plex Sans',
          },
      },
      series: [
          {
              type: 'pie',
              name: name,
              radius: '40%',
              data: dataArr,
              label: {
                normal: {
                  formatter: '{c}',
                    position: 'inside',
                    textStyle: {
                      color: '#000',
                      fontSize: 11,
                    }
                }
            },
              emphasis: {
                  itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
    }
  )
}

function ChartItem({id, title, name, dataName, dataValue}){  
  useEffect(() => {
    let dataArr = new Array()
    dataName.forEach((name, i) => {
      dataArr[i] = {value: dataValue[i], name: name, itemStyle: {color: colorSet[i]}}
    })

    var chart = echarts.init(document.getElementById(id));
    chart.setOption(option(title, name, dataName, dataArr));
  }, [])

  
  return(
    <div id={id} className={styles.chart} data-aos="fade-up" style={{gridArea: id}}></div>
  )
}

ChartItem.propTypes={
  id:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  dataName:PropTypes.array.isRequired,
  dataValue:PropTypes.array.isRequired,
}
export default React.memo(ChartItem)

