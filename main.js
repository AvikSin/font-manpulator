var nose_x
var nose_y
var left_wristX
var right_wristX
var difference
var text1="" 

function setup()
{
    video=createCapture(VIDEO);
    video.size(600,400);
    video.position(200,250)
    canvas=createCanvas(600,400);
    canvas.position(1200,250); 
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("model is loaded");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log(nose_x,nose_y)
        left_wristX=results[0].pose.leftWrist.x;
        right_wristX=results[0].pose.rightWrist.x;
        difference=floor(left_wristX-right_wristX)
    }
    
}

function draw()
{
    background('grey');
    document.getElementById("fontsize").innerHTML="font size of text is = "+difference;
    textSize(difference);
    fill('skyblue')
    text1=document.getElementById("text1").value ;
    text(text1,nose_x,nose_y)

}

function text()
{
 
}