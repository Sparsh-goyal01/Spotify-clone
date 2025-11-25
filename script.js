console.log("welcome to spotify!!");

// variables

let songIndex = 0;
let audioelement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Aaoge Tum Kabhi", filePath: "songs/1.mp3", coverPath: "covers/banner1.jpeg"},
    {songName: "Bulleya - Sultan", filePath: "songs/2.mp3", coverPath: "covers/banner2.jpg"},
    {songName: "Matargashti - Tamaasha", filePath: "songs/3.mp3", coverPath: "covers/banner3.jpg"},
    {songName: "Who Rules The World - Royals", filePath: "songs/4.mp3", coverPath: "covers/banner4.jpg"},
    {songName: "Raat Bhar", filePath: "songs/3.mp3", coverPath: "covers/banner5.jpeg"},
    {songName: "Pal Pal Dil Ke Paas", filePath: "songs/0.mp3", coverPath: "covers/banner6.jpeg"},
    {songName: "Naam Kaam Shehar", filePath: "songs/2.mp3", coverPath: "covers/banner7.jpeg"},
    {songName: "Character Dheela", filePath: "songs/8.mp3", coverPath: "covers/banner8.jpeg"},
    {songName: "Ishq Hai", filePath: "songs/4.mp3", coverPath: "covers/banner9.jpeg"},

]


songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

// play audioelement.play()
audioelement.addEventListener('play', ()=> {
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;
});
audioelement.addEventListener('pause', ()=> {
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
    gif.style.opacity = 0;
});



// handle to play/pause song
masterPlay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime <=0 ){
        audioelement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        // gif.style.opacity = 1;
    }
    else{
        audioelement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        // gif.style.opacity = 0;
    }
})


// Listen to songs
audioelement.addEventListener('timeupdate', ()=>{
    // updating seekbar
    Progress = parseInt((audioelement.currentTime/audioelement.duration)* 100);
    myprogressbar.value = Progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime = myprogressbar.value * audioelement.duration/100;
}
)
// play function
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
        
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        // audioelement.src = `songs/${songIndex+1}.mp3`;
        audioelement.src = songs[songIndex].filePath;
        audioelement.currentTime =0;
        audioelement.play();
        mastersongname.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        

    });
})

document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex >=9){
        songIndex =0;
    }
    else{
        songIndex += 1;
    }
    mastersongname.innerText = songs[songIndex].songName;
    // audioelement.src = `songs/${songIndex+1}.mp3`;
    audioelement.src = songs[songIndex].filePath;
    audioelement.currentTime =0;
    audioelement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})


document.getElementById('previous').addEventListener('click', ()=> {
    if(songIndex <=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    mastersongname.innerText = songs[songIndex].songName;
    // audioelement.src = `songs/${songIndex+1}.mp3`;
    audioelement.src = songs[songIndex].filePath;
    audioelement.currentTime =0;
    audioelement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})



