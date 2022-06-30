import galleryImg from './assets/preview-wide.png'
import etuneImg from './assets/etune-img.png'
import therapifyImg from './assets/therapifyImg.png'
import ethsendImg from './assets/ethsend-img.png'
import schedulerImg from './assets/scheduler-img.png'
import tvhutImg from './assets/tvhut-img.png'


const myProjects = [
  {
    name: "TvHut",
    badges: ["React"],
    img: tvhutImg,
    url: "https://github.com/nyozov/movies",
    siteUrl: "https://tvhut.netlify.app/",
    desc: "Tv show information app utilizing the movie db API to display information such as plot summary, cast, genre, trailer, and rating. Shows can be searched by title, genre, or section(trending, top rated, etc.).",
  },
  {
    name: "Gallery",
    badges: ["React", "Firebase"],
    img: galleryImg,
    url: "https://github.com/nyozov/gallery",
    siteUrl: "https://coherent-server-332620.web.app/",
    desc: "Image hosting app where a user can log in, upload and delete images in their personal storage. Fully functional with drag and drop upload, load transitions, and auth."
  },
  
  {
    name: "IP Tracker",
    badges: ["React"],
    img: 'https://github.com/nyozov/tracker/raw/master/src/assets/wide-view.png?raw=true',
    url: "https://github.com/nyozov/tracker",
    siteUrl: "https://iptrackertest.netlify.app/",
    desc: "IP tracking app where a user can enter an IP address, and recieve the location, timezone, and ISP. A map of the location can also be seen through Leaflet,",
  },
 
  {
    name: "Scheduler",
    badges: ["React", "Express"],
    img: schedulerImg,
    url: "https://github.com/nyozov/scheduler",
    desc: "A user can book an appointment by selecing a day, selecting an open spot, typing in their name, and selecting an interviewer from a list.",
  },
  {
    name: "Therapify",
    badges: ["React", "Express"],
    img: therapifyImg,
    url: "https://github.com/habibcodes/therapify",
    desc: "Tele-health service connecting a patient and a practitioner through features including a calendar for appointments, text-chat, and video-chat through WebRTC.",
  },
  {
    name: "Tweeter",
    badges: ["JQuery"],
    img: "https://github.com/nyozov/tweeter/raw/master/docs/tweet_widescreen.png?raw=true",
    url: "https://github.com/nyozov/tweeter",
    desc: "Single-page AJAX based Twitter clone that uses jQuery, HTML5, and CSS3. A user can write a message, and it will show up on their profile.",
  },
  {
    name: "EthSend",
    badges: ["React", ["Solidity"]],
    img: ethsendImg,
    url: "https://github.com/nyozov/30test",
    desc: "Crypto send/receive dapp utilizing metamask integration",
  },
  
 
];


export default myProjects