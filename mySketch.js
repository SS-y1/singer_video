let peoSong; //人声
let backSong; //背景音乐
let img;  //gif
let amp; //人声的振幅
let amp1; //背景音乐的振幅
let m = 1.25;

let fade = 0;

var direction1 = 1;
var direction2 = 1;
var direction3 = 1;
var direction4 = 1;
var direction5 = 1;
var startSize1 = 4;
var startSize2 = 12;
var startSize3 = 17;
var startSize4 = 22;
var startSize5 = 27;
var maxSize = 30;

//预加载
function preload() {
  peoSong = loadSound('unravelVocals.mp3');  //加载人声音乐
  backSong = loadSound('unravelMusic.mp3');  //加载背景音乐


}

function setup() {
  createCanvas(1600, 800);  //创建画布
  angleMode(DEGREES);  //angleMode()函数用于设置解释角度的模式。可以将其设置为度或弧度。这里为度
  peoSong.play();  //播放人声音乐
  backSong.play();  //播放背景音乐

 // amp = new p5.Amplitude();  //获取人声音频的振幅
  //amp.setInput(peoSong);
  amp1 = new p5.Amplitude();  //获取背景音乐音频的振幅
  amp1.setInput(backSong);
 // img.filter(BLUR, 4); //图像滤镜，模糊背景

  vidElement = createVideo("singer.mp4", afterLoad);
  vidElement.position(250, 50);
  vidElement.size(700,800);
  //  // noLoop();
}


function draw() {

  background(0);
  strokeWeight(3 * m);

  //drawback();  //绘制背景动效
 // drawman();  //绘制人动效
}

function afterLoad() {
    //scale(2);
    vidElement.play();
    vidElement.volume(0);
}


