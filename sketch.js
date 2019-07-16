let picks=[];
function setup(){
    createCanvas(600,600);
    picks.push(new Toothpick(0,0,1));
}
function draw(){
    background(0);
    translate(width/2,height/2);
    scale(0.3);
    frameRate(2);
    let newPicks=[];
    console.log(picks.length);
    for(let i in picks){
        picks[i].show();
    }
    for(let i in picks){
        if(picks[i].isAvailableLeft(picks)){
            newPicks.push(new Toothpick(picks[i].x1,picks[i].y1,picks[i].dir*-1));
        }
        if(picks[i].isAvailableRight(picks)){
            newPicks.push(new Toothpick(picks[i].x2,picks[i].y2,picks[i].dir*-1));
        }
        
    }
    for(let i in newPicks){
        picks.push(newPicks[i]);
    }
}
