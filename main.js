x=0;
y=0;
draw_circle="";
draw_rect="";


var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();

function setup(){
    canvas=createCanvas(900,600);
}

function start() {
    document.getElementById("status").innerHTML="recognition has started";
    recognition.start();
}
    
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="the speech has been recognised as "+content;
    
    if (content=="circle") {
        x=Math.floor(Math.random()*800);
        y=Math.floor(Math.random()*500);
        document.getElementById("status").innerHTML="started drawing circle ";
        draw_circle="set";
    }

    if (content=="rectangle") {
        x=Math.floor(Math.random()*800);
        y=Math.floor(Math.random()*500);
        document.getElementById("status").innerHTML="started drawing rectangle ";
        draw_rect="set";
    }
}

function draw() {
    if (draw_circle=="set") {
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML=" circle is drawn ";
        draw_circle="";
    }

    if (draw_rect=="set") {
        w=Math.floor(Math.random()*100);
        h=Math.floor(Math.random()*200);
        rect(x,y,w,h);
        document.getElementById("status").innerHTML=" rectangle is drawn ";
        draw_rect="";
    }
}
