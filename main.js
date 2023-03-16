let cover = document.getElementById("cover");

let name1 = document.getElementById("Name");
let next = document.getElementById("next");
let audioElement = new Audio('song/1.mp3');
let play = document.getElementById("play");
let progressBar = document.getElementById('progressBar');
let time = document.getElementById("time");
let back = document.getElementById("back");
let songindex = 0;

const songs = [
    {
        title: "A. R. Rahman",
        url:"1",
        cover:"1",
    },
    {
        title: "Amit Trivedi ",
        url:"2",
        cover:"2",
    },
    {
        title: "Yo Yo Honey Singh",
        url:"3",
        cover:"3",
    }    

]

const loadsong = (songs)=>{

    name1.textContent = songs.title;
    cover.src = "covers/"+ songs.cover + ".jpg"
    audioElement.src = "song/"+ songs.url + ".mp3"
}

loadsong(songs[songindex]);

next.addEventListener("click", ()=>{
    
    songindex++;
    loadsong(songs[songindex]);
    audioElement.play();
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');
    cover.classList.add("ani");
});

back.addEventListener('click',()=>{
    songindex--;
    loadsong(songs[songindex]);
    audioElement.play();
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');
    cover.classList.add("ani");
})



play.addEventListener("click", master);

function master(){
    if (audioElement.paused) {
        audioElement.play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
        cover.classList.add("ani");
    }
    else{
        audioElement.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
        cover.classList.remove("ani");
    }
        
    }


   
    audioElement.addEventListener('timeupdate', ()=>{ 
        progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
        progressBar.value = progress;
    })

    progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
})

 
    




