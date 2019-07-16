class Toothpick{
    constructor(x,y,dir){
        this.len=73;
        this.dir=dir;
        if(dir==1){
            this.x1=x-this.len/2;
            this.x2=x+this.len/2;
            this.y1=y;
            this.y2=y;
        }
        else if(dir==-1){
            this.x1=x;
            this.x2=x;
            this.y1=y-this.len/2;
            this.y2=y+this.len/2;
        }
    }
    show(){
        stroke(255);
        noFill();
        strokeWeight(2);
        line(this.x1,this.y1,this.x2,this.y2);
    }
    isAvailableLeft(picks){
        for(let i in picks){
            if(picks[i]!=this){
                if(this.x1==picks[i].x1+picks[i].len/2 && this.y1==picks[i].y1  && this.dir==-1){
                    return false;
                }
                if(this.x1==picks[i].x1 && this.y1==picks[i].y1+picks[i].len/2  && this.dir==1){
                    return false;
                }
                if(this.x1==picks[i].x2 && this.y1==picks[i].y2 && this.dir==-1){
                    return false;
                }
                if(this.x1==picks[i].x2 && this.y1==picks[i].y2  && this.dir==1){
                    return false;
                }
                
            }
        }
        return true;
    }
    isAvailableRight(picks){
        for(let i in picks){
            if(picks[i]!=this){
                if(this.x2==picks[i].x1+picks[i].len/2 && this.y2==picks[i].y1 && this.dir==-1){
                    return false;
                }
                if(this.x2==picks[i].x1 && this.y2==picks[i].y1+picks[i].len/2 && this.dir==1){
                    return false;
                }
                if(this.x2==picks[i].x1 && this.y2==picks[i].y2 && this.dir==1){
                    return false;
                }
                if(this.x2==picks[i].x1 && this.y2==picks[i].y1 && this.dir==-1){
                    return false;
                }
            }
        }
        return true;
    }
}