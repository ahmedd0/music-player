const audioContainer = document.querySelector("#audio-container");
const name = document.querySelector("#name");
const img = document.querySelector("#img");
const progress = document.querySelector("#progress");
const audio = document.querySelector("#audio");
const prev = document.querySelector("#prev");
const play = document.querySelector("#play");
const next = document.querySelector("#next");
const progressContainer = document.querySelector('#p-container');
const songs = ["hey", "summer", "ukulele"];

songIndex = 0;
// intial Song
loadSong(songs[songIndex]);
function loadSong(song) {
  name.textContent = songs[songIndex];
  audio.src = `./musics/${song}.mp3`;
  img.src = `./imgs/${song}.jpg`;
  console.log(audio.src)

}
// Event
play.addEventListener("click", () => {
  if (audioContainer.classList.contains("play")) {
    pauseMusic();
  } else {
    playMusic();
  }
});
// play Music Function
function playMusic() {
  name.textContent = songs[songIndex];
  play.querySelector("i").classList.remove("fa-play");
  play.querySelector("i").classList.add("fa-pause");
  audioContainer.classList.add("play");

  audio.play();
}
// Pause Music
function pauseMusic() {
  play.querySelector("i").classList.remove("fa-pause");
  play.querySelector("i").classList.add("fa-play");
  audioContainer.classList.remove("play");

  audio.pause();
}
// next function
function nextSong(){
    if (songIndex > songs.length - 2) {
        songIndex = 0;
      } else {
        ++songIndex;
      }
      loadSong(songs[songIndex]);
      playMusic();
    
      console.log(songIndex);
}
// prev song 
function prevSong(){
    --songIndex
    if (songIndex < 0) {
       songIndex = songs.length -1 ;
      } 
      loadSong(songs[songIndex]);
      playMusic();
    
      console.log(songIndex);
}
// update progress function
function updateProgress(e){
    step = (e.target.currentTime / e.target.duration) * 100;
    console.log(step);
    progress.style.width = `${step}%` ;
}

next.addEventListener("click", nextSong);
// prev
prev.addEventListener('click', prevSong)
// progress
audio.addEventListener('timeupdate', updateProgress);
// End song
audio.addEventListener('ended', nextSong)
// 
progressContainer.addEventListener('click' , ahmed);
function ahmed(e){
    const width = (e.offsetX/ this.clientWidth)* audio.duration ;
    console.log(e.offsetX);
    console.log(this.clientWidth);
    console.log(width);
    audio.currentTime= `${width} `


    
}
