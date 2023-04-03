xNOSE = 0;
yNOSE = 0;
PosMuIzX = 0;
PosMuDrX = 0;
dif = 0;
function setup(){
    Video = createCapture(VIDEO);
    Video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    pousnet = ml5.poseNet(Video,ModeLoaded);
    pousnet.on('pose',GotPoses);
}
function ModeLoaded(){
    console.log("Modelo Inicialisado");
}
function GotPoses(resluts){
    if(resluts.length > 0){
        console.log(resluts);
        xNOSE = resluts[0].pose.nose.x;
        yNOSE = resluts[0].pose.nose.y;
        PosMuIzX = resluts[0].pose.leftWrist.x;
        PosMuDrX = resluts[0].pose.rightWrist.x;
        dif = floor(PosMuIzX-PosMuDrX);
    }
}
function draw(){
    background("#252850");
    document.getElementById("square_side").innerHTML = "El hancho y alto del cuadrado es:"+dif+"px";
    fill("#FF0000");
    stroke("#FF0000");
    square(xNOSE,yNOSE,dif);
}