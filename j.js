let bird = document.getElementById('bird')
let hole = document.getElementById('hole')
let obstacle = document.getElementById('obstacle')
let up = document.querySelector('.up')
let down = document.querySelector('.down')



hole.onanimationiteration = function(){
    let rand = Math.random()*(500-150);
    hole.style.top = rand +'px'
    console.log(rand)
}
let birdTop = parseInt(getComputedStyle(bird).getPropertyValue('top'));
console.log(birdTop)
// console.log(holeTop)
// console.log(obstacleLeft)
// let obstacleTop = parseInt(getComputedStyle(obstacle).getPropertyValue('top'))

let UP = function(){
    birdTop-=30;
}

let DOWN = function () {
    birdTop+=30;
}
up.onclick = function(){
    UP();
    bird.style.top=birdTop + 'px';
}
down.onclick = function(){
    DOWN();
    bird.style.top=birdTop + 'px'
}

setInterval(function(){
    let holeTop = parseInt(getComputedStyle(hole).getPropertyValue('top'));
    let obstacleLeft = parseInt(getComputedStyle(obstacle).getPropertyValue('left'));
    // if((birdTop>500||birdTop<=0)&&(obstacleLeft<20)){
        if(birdTop>500 || (obstacleLeft<20 && (birdTop>holeTop+150||birdTop<holeTop))){
        alert('try again')
    }
},10)