song1status="";
song2status="";
song1="";
song2="";
leftwristX=0;
leftwristy=0;
rightwristX=0;
rightwristy=0;
scoreleftwrist=0;
scorerightwrist=0;


function preload(){
 song1=loadSound("music.mp3");   
 song2=loadSound("music2.mp3");   
}


function setup(){
    canvas=createCanvas(600,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,450);
    song1status=song1.isPlaying();
    song2status=song2.isPlaying();
    fill("red");
    stroke("red");

    if(scorerightwrist>0.2){
        circle(rightwristX,rightwristy,20);
        song2.stop();

        if(song1status==false){
            song1.play();
            document.getElementById("song").innerHTML="PLAYING HARRY POTTER";
        }
    }
    if(scoreleftwrist>0.2){
        circle(leftwristX,leftwristy,20);
        song1.stop();

        if(song2status==false){
            song2.play();
            document.getElementById("song").innerHTML="PLAYING PETER PAN";
        }
    }

}

    

        
    

        function gotPoses(results)
        {
           if(results.length>0) 
        {
            console.log(results)
            scorerightwrist=results[0].pose.keypoints[10].score;
            scoreleftwrist=results[0].pose.keypoints[9].score;
            console.log("scoreRightwrist ="+ scorerightwrist+"scoreleftwrist");
            
            rightwristX=results[0].pose.rightwrist.x;
            rightleftX=results[0].pose.leftwrist.x;
            console.log("rightwristx ="+ rightwristX +"rightwristy="+ rightwristX);

            leftwristX=results[0].pose.rightwrist.x;
            leftleftX=results[0].pose.rightwrist.x;
            console.log("leftwristx ="+ rightwristX +"leftwristy="+ leftwristX);
        }
    }
 
    
function playSound(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}





























































        
        