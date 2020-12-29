class Plink{
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y; 
        this.width = width;
        this.height = height;
    }

    movement(x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
    }

    isTouch(body) {
  //bodyPosition = body.position;

        var distance = dist(body.x, body.y, this.x, this.y)
        if (distance <= body.width / 2 + this.width / 2) {
            return true;
        }
        else {
            return false;
        }
    }

    display() {
        if (keyIsDown(UP_ARROW)) {
            this.movement(0, -10);
            //console.log(this.x)
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.movement(0, 10);
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.movement(10, 0);
        }


        push();
        fill("blue");
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
       // console.log(this.x)
        pop();
    }

    
}