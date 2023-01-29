import './Playlist.css'
import iconSprite from '../../img/icon/sprite.svg'
import React from 'react'

function PlaylistItem(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        {props.isSkeletonVisible ? (
          <React.Fragment>
            <div className="track__title">
              <div className="track__title-image-skeleton"></div>
              <div className="track__title-text-skeleton"></div>
            </div>
            <div className="track__author-skeleton"></div>
            <div className="track__album-skeleton"></div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="track__title">
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use xlinkHref={iconSprite + '#icon-note'}></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a className="track__title-link" href="http://">
                  {props.title}
                  <span className="track__title-span">{props.titleSpan}</span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a className="track__author-link" href="http://">
                {props.author}
              </a>
            </div>
            <div className="track__album">
              <a className="track__album-link" href="http://">
                {props.albom}
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use xlinkHref={iconSprite + 'icon-like'}></use>
              </svg>
              <span className="track__time-text">{props.time}</span>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

function Playlist(props) {
  const tracks = [
    { title: 'Guilt', author: 'Nero', albom: 'Welcome Reality', time: '4:44' },
    {
      title: 'Elektro',
      author: 'Dynoro, Outwork, Mr. Gee',
      albom: 'Elektro',
      time: '2:22',
    },
    {
      title: 'I’m Fire ',
      titleSpan: '(Remix)',
      author: 'Ali Bakgor',
      albom: 'I’m Fire',
      time: '2:22',
    },
    {
      title: 'Non Stop ',
      titleSpan: '(Remix)',
      author: 'Стоункат, Psychopath',
      albom: 'Non Stop',
      time: '4:12',
    },
    {
      title: 'Run Run ',
      titleSpan: '(feat. AR/CO)',
      author: 'Jaded, Will Clarke, AR/CO',
      albom: 'Run Run',
      time: '2:54',
    },
    {
      title: 'Eyes on Fire ',
      titleSpan: '(Zeds Dead Remix)',
      author: 'Blue Foundation, Zeds Dead',
      albom: 'Eyes on Fire',
      time: '5:20',
    },
    {
      title: 'Mucho Bien ',
      titleSpan: '(Hi Profile Remix)',
      author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
      albom: 'Mucho Bien',
      time: '3:41',
    },
    {
      title: 'Knives n Cherries ',
      author: 'minthaze',
      albom: 'Captivating',
      time: '1:48',
    },
    {
      title: 'How Deep Is Your Love',
      author: 'Calvin Harris, Disciples',
      albom: 'How Deep Is Your Love',
      time: '3:32',
    },
    {
      title: 'Morena',
      author: 'Tom Boxer',
      albom: 'Soundz Made in Romania',
      time: '3:36',
    },
  ]

  let i = 0

  return (
    <div className="content__playlist playlist">
      {tracks.map((track) => (
        <PlaylistItem
          key={i++}
          {...track}
          isSkeletonVisible={props.isSkeletonVisible}
        />
      ))}
    </div>
  )
}

export default Playlist
