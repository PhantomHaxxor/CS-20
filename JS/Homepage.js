var LogoutBtn = document.getElementsByClassName("LogoutBtn")[0]
var toggleButton = document.getElementsByClassName('toggle-button')[0]
var navbarLinks = document.getElementsByClassName('navbar-links')[0]

var VolumeAmount = document.getElementById("VolumeAmount")

var image = document.querySelector('#cover');
var title = document.getElementById('title');
var artist = document.getElementById('artist');
var music = document.getElementById('SongAudio');
var currentTimeEl = document.getElementById('current-time');
var durationEl = document.getElementById('duration');
var progress = document.getElementById('progress');
var progressContainer = document.getElementById('progress-container');
var prevBtn = document.getElementById('prev');
var playBtn = document.getElementById('play');
var nextBtn = document.getElementById('next');

var e = document.querySelector('.volume-slider-div');
var eInner = document.querySelector('.volume-slider');

var isDragging = false;
let isPlaying = false;

var Settings = {
    LoginData: JSON.parse(localStorage.getItem("LoginData")),
    Debounce: false,
    DelayTime: 1000,
}

var songs = [
  {
    path: '/Music/Arcade.mp3',
    displayName: 'Arcade',
    artist: 'Duncan Laurence',
    cover: "https://i.ytimg.com/vi/PNozaFzqOvI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBm8vXh7QF4OYlKWf9kkSoW6NLXA",
  },
  {
    path: '/Music/FlyMeToTheMoon.mp3',
    displayName: 'Fly Me To The Moon',
    artist: 'Frank Sinatra',
    cover: "https://i.ytimg.com/vi/ZEcqHA7dbwM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHE91OZhtBXktw7JhT1-zIN9HyGA",
  },
  {
    path: '/Music/AsTheWorldCavesIn.mp3',
    displayName: 'As the World Caves In',
    artist: 'Matt Maltese',
    cover: "https://i.ytimg.com/vi/yS2KyK3pqj4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDSvZXFHzHdiEzYJUv_A4K0arp3cA",
  },
];

// Small Functions //
function ToggleNavBar() {
    navbarLinks.classList.toggle('active')
}

function RemoveSignedIn() {
    console.log("Storing Data")

    Settings.LoginData.SignedIn = false
    var StringifiedArray = JSON.stringify(Settings.LoginData)
    console.log("Storing Data: " + StringifiedArray)
    localStorage.setItem("LoginData", StringifiedArray)
}

// Big Functions //
function OnWindowLoad() {
    // Runs when window loads and logs out a user if they wern't signed in //

    // Print Current Details //
    console.log(Settings.LoginData)

    // Default LoginData Template //
    if (Settings.LoginData.AccountCreated == false || Settings.LoginData.SignedIn == false) {
        Logout()
        return
    }
}

function Logout() {
    // Make user logout by getting rid of their current data //
    if (Settings.LoginData.AccountCreated == true) {
        RemoveSignedIn()
    }

    window.location.href = window.location.origin
}

var updateBar = function (x, vol) {
   var volume = e;
        var percentage;
        //if only volume have specificed
        //then direct update volume
        if (vol) {
            percentage = vol * 100;
        } else {
            var position = x - volume.offsetLeft;
            percentage = 100 * position / volume.clientWidth;
        }

        if (percentage > 100) {
            percentage = 100;
        }
        if (percentage < 0) {
            percentage = 0;
        }

        //update volume bar and video volume
        eInner.style.width = percentage +'%';
        VolumeAmount.innerText = "Volume: " + Math.floor(percentage) +'%'
        music.volume = percentage / 100;
};

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = song.path;
  changeCover(song.cover);
}

function changeCover(cover) {
  image.classList.remove('active');
  image.src = cover;
  image.classList.add('active')
} 

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    // Calculate display for currentTime
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}

// Set Progress Bar
function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;
  music.currentTime = (clickX / width) * duration;
}

// Event Listeners
OnWindowLoad()

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar);
toggleButton.addEventListener('click', ToggleNavBar)

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

e.addEventListener('mousedown',function(ev){
  isDragging = true;
  updateBar(ev.clientX);
});
document.addEventListener('mousemove',function(ev){
  if(isDragging){
     updateBar(ev.clientX);
  }
});
document.addEventListener('mouseup',function(ev){
isDragging = false;
});