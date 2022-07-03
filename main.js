var dog= 0;
var cat= 0;
var cow= 0;
var lion=0;


function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/EABx5ZEHr/model.json" , modelReady );
}

function modelReady(){
    console.log("model is loaded");
    classifier.classify(gotResult);
}

function gotResult(error,results){
    if(error){
    console.log(error);
    }
    else{
        console.log(results);
        var r=Math.floor(Math.random()*255)+1;
        var g=Math.floor(Math.random()*255)+1;
        var b=Math.floor(Math.random()*255)+1;
        document.getElementById("times-voice-heard").innerHTML="detected dog-"+ dog +"   ,detected cat-"+cat+"   ,detected cow-"+cow+"   ,detected lion-"+lion;
        document.getElementById("audio-being-played").innerHTML="I can hear - "+results[0].label;
        document.getElementById("times-voice-heard").style.color="rgb( "+r+","+g+","+b+")";
        document.getElementById("audio-being-played").style.color="rgb( "+r+","+g+","+b+")";
        var ear=document.getElementById("ear");
        if(results[0].label=="Barking"){
            ear.src="dog.jpg";
        }
       else if(results[0].label=="Meowing"){
           ear.src="cat.jpg";
       }
       else if(results[0].label=="mooing"){
           ear.src="cow.webp";
       }
       else if(results[0].label=="roaring"){
            ear.src="lion.jpeg";
       }
       else if(results[0].label=="Background Noise"){
            ear.src="ear.jpg";
       }
    }
}


