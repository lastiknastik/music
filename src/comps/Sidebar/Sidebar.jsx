import './Sidebar.css'
import playlist01 from '../../img/playlist01.png'
import playlist02 from '../../img/playlist02.png'
import playlist03 from '../../img/playlist03.png'
import React from 'react'

function SidebarItem(props) {
  return (
    <React.Fragment>
      {props.isSkeletonVisible ? (
        <div className="sidebar__item-skeleton"></div>
      ) : (
        <div className="sidebar__item">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src={props.imgSrc}
              alt={props.imgAlt}
            ></img>
          </a>
        </div>
      )}
    </React.Fragment>
  )
}

function Sidebar(props) {
  let sidebarItems = [
    { imgSrc: playlist01, imgAlt: "day's playlist" },
    { imgSrc: playlist02, imgAlt: "today's 100 hits" },
    { imgSrc: playlist03, imgAlt: 'indie charge' },
  ]

  let i = 0

  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">{props.name}</p>
        <div className="sidebar__avatar"></div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={i++}
              {...item}
              isSkeletonVisible={props.isSkeletonVisible}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
