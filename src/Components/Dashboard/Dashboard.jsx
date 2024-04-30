import React from 'react'
import Sidebar from "../Sidebar/Sidebar"
import style from './dashboard.module.css'
import Content from "../Content/Content"

const Dashboard = () => {
  return (
    <div className={style.container}>
        <Sidebar />
        <Content />
    </div>
  )
}

export default Dashboard
