var plink;
var bink1;
var ogroup, o;
var pgroup, p;
var ground;
var d = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var v = -5;


function setup() {
  createCanvas(displayWidth, displayHeight);
  ogroup = new Group();
  pgroup = new Group();
  //plink = new Plink(180, 300, 40, 40);
  plink = createSprite(180, displayHeight/2, 40, 40);
  //plink.velocityX = 7;
  plink.shapeColor = ("blue");
  bink1 = createSprite(80, displayHeight/2, 50, 50);
  bink1.shapeColor = ("red");
  ground = createSprite(width/2, height - 40, width*2, 20);
  ground.velocityX = -7;
  plink.debug = true;
}

    function movement(x, y) {
        plink.x = plink.x + x;
        plink.y = plink.y + y;
    }

function draw() {
  background(0);
  text("Distance: " + d, 50, 50);
  if (gameState === PLAY) {
        bink1.y = plink.y
          if (ground.x < 0) {
            ground.x = ground.width / 3;
        }
    
          bink1.display();
          spawnObstacles();
          spawnPowers();
          if (ogroup.isTouching(plink)) {
                v = v - 0.5
                bink1.x = bink1.x + 1;
                console.log(bink1.x);
                ogroup.setVelocityXEach(v);
                pgroup.setVelocityXEach(v);
                pgroup.setLifetimeEach(-(1800 / v));
                ogroup.setLifetimeEach(-(1800 / v));
          }
    
          if (pgroup.isTouching(plink)) {
              if (v < -1) {
                  bink1.x = bink1.x - 1;
                      v = v + 0.5
                  pgroup.setVelocityXEach(v);
                  ogroup.setVelocityXEach(v);
                  pgroup.setLifetimeEach(-(1800 / v));
                  ogroup.setLifetimeEach(-(1800 / v));
                  
                
            }
          }
          if (keyIsDown(UP_ARROW)) {
                    movement(0, -10);
          }

          if (keyIsDown(DOWN_ARROW)) {
            movement(0, 10);

          }
    
          if (bink1.isTouching(plink)) {
            gameState = END; 
            text("GAME OVER", 900, 300);
            
          }
    
          if (d > 1000) {
            gameState = END
            text("YOU WIN", 900, 300);
          }
  
    d = d + Math.round(getFrameRate()/60);
  }


  else if (gameState === END) {
    ground.velocityX = 0;
    p.destroyEach();
    o.destroyEach();
    plink.remove();
    bink1.remove();
    
  }

  


  

  drawSprites();
}

function spawnPowers() {
  if (frameCount % 75 === 0) {
    p = createSprite(width, Math.round(random(30, 570)), 50, 50);
    p.shapeColor = ("yellow");
    p.velocityX = v;
    p.lifetime = 360;
    pgroup.add(p);
  }
}

function spawnObstacles() {
  if (frameCount % 50 === 0) {
    o = createSprite(width, Math.round(random(30, 570)), 45, 45);
    
    o.velocityX = v;
    o.lifetime = 360;
    ogroup.add(o);
  
    
  }
}
