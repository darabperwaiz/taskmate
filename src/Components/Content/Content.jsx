import React from "react";
import style from "./content.module.css";
import Task from "../Task/Task";

const Content = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.left}>
          <p className={style.breadcrumbs}>
            <span>Projects</span>/ <span>My Projects</span>
          </p>
          <p className={style.head_title}>
            <span>My Projects</span>{" "}
            <span>
              <i class="fa-solid fa-angle-down"></i>
            </span>
          </p>
        </div>
        <p className={style.date}>
          <i class="fa-solid fa-calendar-days"></i> <span>12 Feb 2023</span>
        </p>
      </div>
      <div className={style.middle}>
        <div className={style.middle_left}>
          <table>
            <tbody>
              <tr className={style.row1}>
                <td>Priority</td>
                <td>
                  <span>Medium</span>
                </td>
              </tr>
              <tr className={style.row2}>
                <td>Due date</td>
                <td>28 Feb 2023</td>
              </tr>
              <tr className={style.row3}>
                <td>Tags</td>
                <td>
                  <span>Meetings</span>
                  <span>UI Design</span>
                  <span>Development</span>
                  <span>UX Research</span>
                </td>
              </tr>
              <tr className={style.row4}>
                <td>Assignees</td>
                <td>
                  <span>
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
                      alt=""
                    />
                    Irvan Moses
                  </span>
                  <span>
                    <img
                      src="https://cdn.dribbble.com/users/10464510/avatars/normal/2da504c7be9549c01971d8ed468d7b46.png?1643369371"
                      alt=""
                    />{" "}
                    Hatypo Studio
                  </span>
                  <span>+2 more</span>
                  <span>+</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <input type="text" placeholder="Search task or project" />
        </div>
      </div>
      <div className={style.task_filter}>
        <div className={style.new_task}>
          <span>New Task</span>
          <span>
            <i class="fa-solid fa-angle-down"></i>
          </span>
        </div>
        <div className={style.filter}>
            <select name="" id="">
                <option value="">Filter</option>
            </select>
            <select name="" id="">
                <option value="" >Sort</option>
            </select>
            <select name="" id="">
                <option value="" >Label</option>
            </select>
            <select name="" id="">
                <option value="" >Category</option>
            </select>
        </div>
      </div>
      <div className={style.tasks}>
          <div className={style.todo}>
            <div>
              <span>Todo <span style={{color: 'orange', fontSize: '12px'}}><i class="fa-solid fa-circle-small"></i></span></span>
              <p style={{display: 'flex', gap: '5px', color: 'grey'}}>
              <span><i class="fa-solid fa-ellipsis"></i></span>
              <span><i class="fa-solid fa-square-plus"></i></span>
              </p>
            </div>
            <div className={style.allTask}>
            <Task tag='ui' task='task' date='Today' isImportant='true' text='Create a Visual Style Guide' time='09:00 AM - 09:30 AM'/>
            <Task tag='dev' task='task' date='18 Feb 2023' isImportant='false' text='Slicing Landing Page' time='07:30 AM - 09:30 AM'/>
            <Task tag='meetings' task='task' date='28 Feb 2023' isImportant='true' text='Testing and User Feedback' time='09:00 AM - 09:30 AM'/>
            <Task tag='ux' task='task' date='02 Mar 2023' isImportant='false' text='Create User' time='09:00 AM - 09:30 AM'/>
            </div>
          </div>
          <div className={style.inProgress}>
          <div>
              <span>In Progress</span>
              <p style={{display: 'flex', gap: '5px', color: 'grey'}}>
              <span><i class="fa-solid fa-ellipsis"></i></span>
              <span><i class="fa-solid fa-square-plus"></i></span>
              </p>
            </div>
            <div className={style.allTask}>
            <Task tag='meetings' task='task' date='Today' isImportant='true' text='Testing and User Feedback' time='09:00 AM - 09:30 AM'/>
            <Task tag='ux' task='task' date='13 Feb 2023' isImportant='false' text='Analyze Research Data' time='07:30 AM - 09:30 AM'/>
            <Task tag='ui' task='task' date='28 Feb 2023' isImportant='false' text='UX Research: Usability Testing' time='07:30 AM - 09:30 AM'/>
            </div>
          </div>
          <div className={style.completed}>
          <div>
              <span>Completed <span style={{color: 'lightgreen', fontSize: '12px'}}><i class="fa-solid fa-circle-small"></i></span></span>
              <p style={{display: 'flex', gap: '5px', color: 'grey'}}>
              <span><i class="fa-solid fa-ellipsis"></i></span>
              <span><i class="fa-solid fa-square-plus"></i></span>
              </p>
            </div>
            <div className={style.allTask}>
            <Task tag='' task='task' date='Today' isImportant='false' isCompleted='true' text='Meetings with Client' time='09:00 AM - 09:30 AM'/>
            <Task tag='' task='task' date='Today' isImportant='false' isCompleted='true' text='Develop Back-End Systems' time='07:30 AM - 09:30 AM'/>
            <Task tag='' task='task' date='Today' isImportant='false' isCompleted='true' text='Implement Security Features' time='07:30 AM - 09:30 AM'/>
            </div>
          </div>
          <div className={style.overdue}>
          <div>
              <span>Overdue</span>
              <p style={{display: 'flex', gap: '5px', color: 'grey'}}>
              <span><i class="fa-solid fa-ellipsis"></i></span>
              <span><i class="fa-solid fa-square-plus"></i></span>
              </p>
            </div>
            <div className={style.allTask}>
            <Task tag='' task='task' date='Today' isImportant='false' isCompleted='false' text='Create Mockups for Dribble Shot' time='07:30 AM - 09:30 AM'/>
            <Task tag='' task='task' date='Today' isImportant='false' isCompleted='false' text='Optimize Web Performance' time='07:30 AM - 09:30 AM'/>
            </div>
          </div>
          <div className={style.other}>
          <div>
            <p style={{display: 'flex', gap: '5px', color: 'grey'}}>
              <span><i class="fa-solid fa-ellipsis"></i></span>
              <span><i class="fa-solid fa-square-plus"></i></span>
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Content;
