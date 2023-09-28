import songs from "./songs.js";

let index = 0;
let isPlaying = false;

const toggle_button = document.querySelector("#musics");
const close_button = document.querySelector("#close");
const music_list = document.querySelector("#music_list");
const ul = document.querySelector("ul");

// Songs info tag
const audioTag = document.querySelector("audio");
const image = document.querySelector("#image");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const selected_song_id = document.querySelector("#selected_song_id");
selected_song_id.innerHTML = `${songs[0].id}/${songs.length}`;

// Progress Bar
const progress_div = document.querySelector("#progress_div");
let progressBar = document.querySelector("#progress");
const song_duration = document.querySelector("#duration");
let current_time = document.querySelector("#current_time");

// Buttons
const play_pause = document.querySelector("#play");
const next = document.querySelector("#next");
const perv = document.querySelector("#previous");

// Volume
const volume = document.querySelector("#volume");

// Functions
const LoadSong = (song) => {
  title.innerHTML = song.title;
  artist.innerHTML = song.artist;
  image.setAttribute("src", song.img);
  audioTag.setAttribute("src", song.url);
  selected_song_id.innerHTML = `${song.id}/${songs.length}`;
};

const load_songs_to_music_list = () => {
  songs.map((song) => {
    let li = `<li>
    ${song.title}
    </li>`;
    ul.insertAdjacentHTML("beforeend", li);
  });

  const liArray = [...ul.childNodes];
  liArray.map((single_li, index1) => {
    single_li.addEventListener("click", () => {
      index = index1;
      LoadSong(songs[index]);
      resumeSong(audioTag, play_pause);
    });
  });
};

const resumeSong = (playTag, play) => {
  isPlaying = true;
  play.classList.replace("fa-play", "fa-pause");
  play.title = "Pause";
  playTag.play();
};

const pauseSong = (pauseTag, pause) => {
  isPlaying = false;
  pause.classList.replace("fa-pause", "fa-play");
  pause.title = "Play";
  pauseTag.pause();
};

const nextSong = () => {
  index = (index + 1) % songs.length;
  LoadSong(songs[index]);
  resumeSong(audioTag, play_pause);
};

const pervSong = () => {
  index = (index - 1 + songs.length) % songs.length;
  LoadSong(songs[index]);
  resumeSong(audioTag, play_pause);
};

const timeFormat = (text, tag) => {
  let min = Math.floor(text / 60);
  let sec = Math.floor(text - min * 60);
  sec < 10
    ? (tag.innerHTML = `${min}:0${sec}`)
    : (tag.innerHTML = `${min}:${sec}`);
};

// Event Callback Function
const playSong = (event) => {
  if (isPlaying) {
    pauseSong(audioTag, event.srcElement);
  } else {
    resumeSong(audioTag, event.srcElement);
  }
};

const volume_change = (event) => {
  audioTag.volume = event.srcElement.value / 100;
  volume.title = (audioTag.volume * 100).toFixed(0);
};

const progress_duration_meter_handler = (event) => {
  const { duration, currentTime } = event.srcElement;
  progressBar.style.width = `${(100 * currentTime) / duration}%`;

  if (duration) {
    timeFormat(duration, song_duration);
  }
  timeFormat(currentTime, current_time);
};

const change_current_time = (event) => {
  const { duration } = audioTag;
  let selected_time = (event.offsetX / event.srcElement.clientWidth) * duration;
  audioTag.currentTime = selected_time;
};

const show_music_list = () => {
  music_list.style.display = "block";
};

const hide_music_list = () => {
  music_list.style.display = "none";
};

load_songs_to_music_list();
// Event Listener
play_pause.addEventListener("click", playSong);
next.addEventListener("click", nextSong);
perv.addEventListener("click", pervSong);
audioTag.addEventListener("ended", nextSong);
audioTag.addEventListener("timeupdate", progress_duration_meter_handler);
volume.addEventListener("change", volume_change);
progress_div.addEventListener("click", change_current_time);
toggle_button.addEventListener("click", show_music_list);
close_button.addEventListener("click", hide_music_list);
