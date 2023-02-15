import playlist01 from './img/playlist01.png'
import playlist02 from './img/playlist02.png'
import playlist03 from './img/playlist03.png'

export const TRACKS = [
  {
    id: 1,
    title: 'Guilt',
    author: 'Nero',
    albom: 'Welcome Reality',
    time: '4:44',
  },
  {
    id: 2,
    title: 'Elektro',
    author: 'Dynoro, Outwork, Mr. Gee',
    albom: 'Elektro',
    time: '2:22',
  },
  {
    id: 3,
    title: 'I’m Fire ',
    titleSpan: '(Remix)',
    author: 'Ali Bakgor',
    albom: 'I’m Fire',
    time: '2:22',
  },
  {
    id: 4,
    title: 'Non Stop ',
    titleSpan: '(Remix)',
    author: 'Стоункат, Psychopath',
    albom: 'Non Stop',
    time: '4:12',
  },
  {
    id: 5,
    title: 'Run Run ',
    titleSpan: '(feat. AR/CO)',
    author: 'Jaded, Will Clarke, AR/CO',
    albom: 'Run Run',
    time: '2:54',
  },
  {
    id: 6,
    title: 'Eyes on Fire ',
    titleSpan: '(Zeds Dead Remix)',
    author: 'Blue Foundation, Zeds Dead',
    albom: 'Eyes on Fire',
    time: '5:20',
  },
  {
    id: 7,
    title: 'Mucho Bien ',
    titleSpan: '(Hi Profile Remix)',
    author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
    albom: 'Mucho Bien',
    time: '3:41',
  },
  {
    id: 8,
    title: 'Knives n Cherries ',
    author: 'minthaze',
    albom: 'Captivating',
    time: '1:48',
  },
  {
    id: 9,
    title: 'How Deep Is Your Love',
    author: 'Calvin Harris, Disciples',
    albom: 'How Deep Is Your Love',
    time: '3:32',
  },
  {
    id: 10,
    title: 'Morena',
    author: 'Tom Boxer',
    albom: 'Soundz Made in Romania',
    time: '3:36',
  },
]

export const PLAYLISTS = [
  {
    id: 0,
    imgSrc: '',
    imgAlt: 'my tracks',
    title: 'Мои треки',
  },
  {
    id: 1,
    imgSrc: playlist01,
    imgAlt: "day's playlist",
    title: 'Плейлист дня',
  },
  {
    id: 2,
    imgSrc: playlist02,
    imgAlt: "today's 100 hits",
    title: '100 танцевальных хитов',
  },
  { id: 3, imgSrc: playlist03, imgAlt: 'indie charge', title: 'Инди заряд' },
]

export const PLAYLISTSREL = [
  { playlistId: 1, trackId: 1 },
  { playlistId: 1, trackId: 4 },
  { playlistId: 1, trackId: 6 },
  { playlistId: 1, trackId: 9 },
  { playlistId: 2, trackId: 1 },
  { playlistId: 2, trackId: 2 },
  { playlistId: 3, trackId: 1 },
  { playlistId: 3, trackId: 4 },
  { playlistId: 3, trackId: 6 },
  { playlistId: 3, trackId: 7 },
  { playlistId: 3, trackId: 8 },
  { playlistId: 3, trackId: 9 },
  { playlistId: 0, trackId: 1 },
  { playlistId: 0, trackId: 2 },
  { playlistId: 0, trackId: 3 },
  { playlistId: 0, trackId: 4 },
  { playlistId: 0, trackId: 5 },
  { playlistId: 0, trackId: 6 },
  { playlistId: 0, trackId: 7 },
]
