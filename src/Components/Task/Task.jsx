import React, { useState, useEffect } from 'react'
import style from './task.module.css'

const Task = ({tag, task, date, isImportant, isCompleted, text, time}) => {
    const [backColor, setBackColor] = useState('');
    const [icon, setIcon] = useState('')
    const icons = () =>{
        if(isImportant=='true') {
            setIcon(<i class="fa-solid fa-star"></i>)
        } else if(isCompleted=='true') {
            setIcon(<i class="fa-solid fa-circle-check"></i>)
        }else if(isCompleted=='false') {
            setIcon(<i class="fa-solid fa-clock"></i>)
        }
    }
    
    useEffect(() => {
        if(tag==='ui') {
            setBackColor('#f6edcc')
        }else if(tag==='meetings') {
            setBackColor('#f4e0cb')
        }else if(tag==='dev') {
            setBackColor('#cee9f6')
        } else if(tag==='ux') {
            setBackColor('#d2f7d0')
        }else {
            setBackColor('#eeeeee')
        }

        icons()
    }, []);
  return (
    <div className={style.task} style={{backgroundColor: `${backColor}`}}>
      <div className={style.top}>
        <p>{icon} {date}</p>
        {/* <p>{isImportant=='true' ? <><span style={{color: 'orange'}}><i class="fa-solid fa-star"></i></span> <span>{date}</span></>: <>{isCompleted=='true' ? <><span><i class="fa-solid fa-circle-check"></i></span><span>{date}</span></>: <><span><i class="fa-solid fa-clock"></i></span><span>{date}</span></> }</>}</p> */}
        <span style={{fontSize: '22px'}}><i class="fa-light fa-circle-arrow-up-right"></i></span>
      </div>
      <div className={style.middle}>
        <p>{text}</p>
      </div>
      <div className={style.bottom}>
        <p>{time}</p>
      </div>
    </div>
  )
}

export default Task
