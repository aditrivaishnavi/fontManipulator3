difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#d4af37');
    textSize(difference);

    document.getElementById("font_size").innerHTML = "Font size of the name will be = "  + difference + "px";
    fill('#F90093');
    stroke('#F90093');
    text('Aditrivaishnavi', 40, 300);
}
function modelLoaded() {
    console.log('PoseNet is Initialized!');
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);

    }
}