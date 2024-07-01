import React from 'react'
import './Choosebox.css'

const ChooseBox = ({img,title,text}) => {
  return (
    <div className="choose-box">
        <div className="choose-box_img">
            <i>{img}</i>
        </div>
        <span className='service'>{title}</span>
        <span className='explain'>{text}</span>
    </div>
  )
}

export default ChooseBox