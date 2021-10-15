"use strict";

const title = document.querySelector('.title');
const prev = document.querySelector('.prev');
const playPause = document.querySelector('.playPause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');

const songList = [
    {
        path: "music/Overworld.mp3",
        songName: "Overworld",
    },
    {
        path: "music/Monody.mp3",
        songName: "Monody",
    },
    {
        path: "music/HeartBeat.mp3",
        songName: "HeartBeat",
    },
    {
        path: "music/Savannah.mp3",
        songName: "Savannah",
    }
]

let song_Playing = false;

function playSong(){
    song_Playing = true;
    audio.play();
    playPause.classList.add('active');
    playPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
}
function pauseSong(){
    song_Playing = false;
    audio.pause();
    playPause.classList.remove('active');
    playPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}

playPause.addEventListener('click',()=>(song_Playing ? pauseSong() : playSong()));

function loadSong(songList){
    title.textContent=songList.songName;
    audio.src = songList.path;
}

let i=0;

loadSong(songList[i])

function prevSong(){
    i--;
    if(i < 0){
        i = songList.length -1;
    }
    loadSong(songList[i]);
    playSong();
}
prev.addEventListener('click',prevSong);

function nextSong(){
    i++;
    if(i > songList.length-1){
        i = 0;
    }
    loadSong(songList[i]);
    playSong();
}

next.addEventListener('click',nextSong);