noseX = 0;
noseY=0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
    hat = loadImage('https://i.postimg.cc/TwYqb2cS/hat.png');
}

function setup() {
    canvas = createCanvas(450,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450,450);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log("model Loaded");
}

function gotPoses(results) {
    if(results.length > 0) {
        nose_hat = results[0].pose.nose.y-100;
        noseX = results[0].pose.nose.x-40;
        noseY = results[0].pose.nose.y;
        console.log(results);
        console.log("nose X =" + noseX);
        console.log("nose Y =" + noseY);
    }
}

function draw() {
    image(video , 0 , 0 , 450 , 450);
    image(mustache , noseX , noseY , 80 , 35);
    image(hat , noseX , nose_hat , 200 , 100);
}

function take_snapshot() {
    save('Your_Filter_img.png')
}