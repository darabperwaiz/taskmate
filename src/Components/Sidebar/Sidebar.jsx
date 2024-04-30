import React, { useState } from "react";
import style from "./sidebar.module.css";
import './sidebar.css'

const Sidebar = () => {

    const [isLight, setIsLight] = useState(false);
    const handleLight = ()=> {
        setIsLight(true)
    }
    const handlDark = () =>{
        setIsLight(false)
    }
  return (
    <div className={style.sidebar}>
      <div className={style.sidebar_header}>
        <div className={style.logo}>
          <span>Task</span>
          <span>mate</span>
          <p>Focus, Prioritize, Execute</p>
        </div>
        <div className={style.user}>
          <div className={style.user_logo}>
            <img
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
              alt=""
            />
          </div>
          <div className={style.userInfo}>
            <p className={style.userName}>
              Irvan Moses <i class="fa-solid fa-angle-down"></i>
            </p>
            <p className={style.userEmail}>irvanmoses10@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={style.menuItems}>
        <div className={style.menu}>
            <p>Menu <i class="fa-solid fa-angle-down"></i></p>
          <div className={style.menus}>
            <p> <span><i class="fa-solid fa-objects-column"></i></span> Overview</p>
            <p><span><i class="fa-solid fa-list"></i></span> Task List</p>
            <p className="active"><span><i class="fa-solid fa-grid"></i></span>Project Overview</p>
            <p><span><i class="fa-solid fa-calendar-days"></i></span> Calender</p>
            <p><span><i class="fa-solid fa-gear"></i></span> Settings</p>
          </div>
        </div>
        <div className={style.menu}>
            <p>List <i class="fa-solid fa-angle-down"></i></p>
          <div className={style.lists}>
            <p><span>😎</span> Personal</p>
            <p><span>🎨</span> Design</p>
            <p><span>💻</span> Development</p>
            <p><span>📝</span> Research</p>
          </div>
        </div>
      </div>
      <div className={style.theme}>
        <div onClick={handleLight} className={`${style.light} ${isLight ? 'on' : ''}`}><i class="fa-solid fa-sun-bright"></i> <span>Light</span></div>
        <div onClick={handlDark} className={`${style.dark} ${isLight ? '' : 'on'}`}><i class="fa-light fa-moon"></i> <span>Dark</span></div>
      </div>
    </div>
  );
};

export default Sidebar;
