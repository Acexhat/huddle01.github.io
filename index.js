
window.onload=videoOn();
function videoOn(){
    var video = document.querySelector('video');
const options={
    video:true
}
navigator.mediaDevices.getUserMedia(options)
.then(function(stream){
    document.querySelector('video').srcObject=(stream);
})
.catch((e)=>{
    console.log(e);
})
}


function vidOff(){
    var stream = document.querySelector('video').srcObject;
    var tracks = stream.getTracks();
    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];
      track.stop();
    }
    document.querySelector('video').srcObject = null;
}

var vidBtn = document.getElementById("videoBtn");
var count=0;
function videoBtnClicked(){
    if(count==0){
        vidOff();
        toggleVidOff();
        toggleDivOn();
        count=1;
        document.getElementById("videoimg").src="./VideoOff.0ae8beee.svg";
    }
    else{
        videoOn();
        toggleDivOff();
       toggleVidOn();
        document.getElementById("videoimg").src="./VideoOn.4fc76b20.svg"
        count=0;
    }
}

var micBtn = document.getElementById("micBtn");
var micCount=0;
function micBtnClicked(){
    console.log("clicked");
    if(micCount==0){
        micCount=1;
        document.getElementById("micImg").src="./MicOff.42f250f2.svg"
    }
    else{
      micCount=0;
      document.getElementById("micImg").src="./MicOn.d3732787.svg"  
    }
}


function toggleDivOn(){
    var divA = document.getElementById("profile-div");
    divA.className='newProfile';
}
function toggleDivOff(){
    var divA = document.getElementById("profile-div");
    divA.className='profile';
}
function toggleVidOff(){
    var divB = document.getElementById("video-div")
    divB.style.display='none';
}

function toggleVidOn(){
    var divB = document.getElementById("video-div")
    divB.style.display='block';
}