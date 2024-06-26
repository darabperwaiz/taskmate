import React, { useState } from 'react'
import Sidebar from "../Sidebar/Sidebar"
import style from './dashboard.module.css'
import Content from "../Content/Content"

const Dashboard = () => {
  const [show, setShow] = useState('false')
  console.log(show)
  return (
    <div className={style.container}>
        <Sidebar show={show} setShow={setShow}/>
        <Content setShow={setShow}/>
    </div>
  )
}

export default Dashboard
