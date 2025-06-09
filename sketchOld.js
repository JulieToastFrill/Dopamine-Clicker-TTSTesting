var solution, num1, num2, inp, button, div1, div2;
let dopamine = 0;
var multiplier = 1;
var time = 0;
var Solution;
var Num1, Num2;
let Problem;
var Correct = false;
var BackColorR = 255;
var BackColorG = 255;
var BackColorB = 255;
var GreenTime = 0;
var StartGreen = false;
var PlayerAnswer;
var Degrees = 269;
var createInp = true;
var NewProblem = true;
var GriddyPercent = 0;
var GriddyNumber = 20;
let GriddyVid;
var PlayGriddy = false;
let fontMartianMono;
let circleCollision;
var circleColor = 0;
const Multi = [0, 1, 2, 3];
var CorrectAnswer;
let Box0 = false;
let Box1 = false;
let Box2 = false;
let Box3 = false;
let DopeModel;
var gameState = 0;
var menuButton = false;
var UpgradePrice = [25, 25, 0, 0];
var AutoDopa = 0;
let Milliseconds = 0;
var firstAngle = 0;
var secondAngle = 128;
//var Scale = 0.7;
var inputPosition;
let details;
var isClicked = false;
var runClick = true;
var waitTime = 0;

function preload() {
  DopeModel = loadModel("681-bas-color-print_NIH3D.stl", true);
  // loadFont('fonts\MartianMono-Thin.ttf');
  // GriddyVid = createVideo('Kimiko Audio LoopLowQ.mp4');
}
function setup() {
  inputPosition = createVector(0, 0);
  fontMartianMono = loadFont("MartianMono-VariableFont_wdth,wght.ttf");
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(60);
}

function windowResized() {
  print("Size: " + windowWidth + " " + windowHeight);
  resizeCanvas(windowWidth, windowHeight, WEBGL);
  // inp.position(width / 2 - 50, height / 2 - 50);
}

function draw() {
  background(255, BackColorG, BackColorB);
 //checkClick();
  push();
  textAlign(CENTER);
  color("black");
  scale(0.2);
  //text(details, 0, -600);
  pop();

  smooth();

  if (gameState == 0 || gameState == 1) {
    //checks for mouse collision with menu button and draws the button
    push();

    rectMode(CENTER);
    fill(0);
    noStroke();
    rect(0, 350, 100, 40);

    pop();
   // scale(

    menuButton = collidePointRect(
      inputPosition.x,
      inputPosition.y,
      windowWidth / 2 - 50,
      windowHeight / 2 + 330,
      100,
      40
    );
  }
  //print("\nMenu Button : " + menuButton);

  //calculates time for AutoDopa
  // print(Milliseconds + " " + deltaTime);

  Milliseconds += deltaTime;
  if (Milliseconds >= 1000) {
    dopamine += AutoDopa;
    Milliseconds = 0;
  }

  //game state 3

  if (gameState == 3) {
  }
  //game state 0
  if (gameState == 0) {
    push();

    strokeWeight(7);
    line(1 - GriddyPercent, -170, -1 + GriddyPercent, -170);

    pop();

    //sets the position of the dopamine
    push();

    noStroke();
    normalMaterial();
    scale(2);
    translate(0, 0, -100);
    rotateY(frameCount * 0.009);
    
    model(DopeModel);

    pop();

    //scale(0.5);

    //checks if answer is right
    
    if (Correct == true) {
      dopamine += multiplier;
      Correct = false;
      // print(dopamine);
      NewProblem = true;
      griddyMeter();
    }

    //Draws all visual elements on the screen
    textFont(fontMartianMono);

    rectMode(CENTER);
    fill(0);
    textAlign(CENTER);
    textSize(64);
    text("DOPAMINE\n" + dopamine, 0, -300);
    fill(0, 0, 0, 0);
    fill(0);
    text(num1 + " x " + num2, 0, -70);
    textSize(100);
    rectMode(CORNER);
    fill(255);

    //collision boxes
    // rect(-200, 0, 160, 120);
    // rect(40, 0, 160, 120);
    // rect(-200, 150, 160, 120);
    // rect(40, 150, 160, 120);

    fill(0);

    //mult choice options
    text(Multi[1], 120, 100);
    text(Multi[0], -120, 100);
    text(Multi[2], -120, 250);
    text(Multi[3], 120, 250);

    //checks for mouse collision on multiple choice
    //uses the p5.collide2d library https://github.com/bmoren/p5.collide2D

  if (runClick == false) {
      BackColorB = 0;
      BackColorG = 0;
     
      waitTime += 1;
      if (waitTime >= 180) {
        runClick = true;
      }
      print("Running!!!!");
    }
  if (runClick == true) {
    BackColorB = 255;
    BackColorG = 255;
      
    Box0 = collidePointRect(
      inputPosition.x,
      inputPosition.y,
      windowWidth / 2 - 205,
      windowHeight / 2 - 5,
      165,
      125
    );
    Box1 = collidePointRect(
      inputPosition.x,
      inputPosition.y,
      windowWidth / 2 + 35,
      windowHeight / 2 - 5,
      165,
      125
    );
    Box2 = collidePointRect(
      inputPosition.x,
      inputPosition.y,
      windowWidth / 2 - 205,
      windowHeight / 2 + 150,
      165,
      125
    );
    Box3 = collidePointRect(
      inputPosition.x,
      inputPosition.y,
      windowWidth / 2 + 35,
      windowHeight / 2 + 150,
      165,
      125
    );
    checkClick();
 
    
  }  
   if (NewProblem) {
      mathFact();
      NewProblem = false;
    } 
   print(runClick);
  print(waitTime);}
  //draws upgrade menu elements
  if (gameState == 1) {
    //draws dopamine model

    push();

    noStroke();
    normalMaterial();
    scale(2);
    translate(0, 0, -100);
    rotateY(-frameCount * 0.009);
    model(DopeModel);

    pop();

    //draws text

    push();

    textAlign(CENTER);
    textFont(fontMartianMono);
    textSize(64);
    fill(0);
    text("UPGRADES", 0, -300);

    pop();

    push();

    textAlign(CENTER);
    textSize(38);
    fill(0);
    textFont(fontMartianMono);
    text("DOPAMINE\n" + dopamine, 0, -420);

    pop();

    push();

    textAlign(CENTER);
    textFont(fontMartianMono);
    textSize(27);
    fill(0);
    text("AUTO\nDOPAMINE\n" + UpgradePrice[0] + " DOPAMINE", -120, -260);

    pop();

    push();

    textAlign(CENTER);
    textFont(fontMartianMono);
    textSize(27);
    fill(0);
    text("DOPAMINE\nMULTIPLIER\n" + UpgradePrice[1] + " DOPAMINE", 120, -260);

    pop();
    //draws buttons

    push();

    noStroke();
    fill(3);
    circle(-120, -120, 120);
    circle(120, -120, 120);

    //unfinished buttons
    // circle(-120, 120, 120);
    // circle(120, 120, 120);
    pop();

    //checks for button collision


    Box0 = collidePointCircle(
      inputPosition.x,
      inputPosition.y,
      windowWidth / 2 - 120,
      windowHeight / 2 - 120,
      130
    );
    Box1 = collidePointCircle(
      inputPosition.x,
      inputPosition.y,
      windowWidth / 2 + 120,
      windowHeight / 2 - 120,
      130
    );
    Box2 = collidePointCircle(
      inputPosition.x,
      inputPosition.y,
      windowWidth / 2 - 120,
      windowHeight / 2 + 120,
      130
    );
    Box3 = collidePointCircle(
      inputPosition.x,
      inputPosition.y,
      windowWidth / 2 + 120,
      windowHeight / 2 + 120,
      130
    );
    checkClick();
  }

  //collision debug

  // print(Multi[0], " ", Multi[1], " ",Multi[2], " ", Multi[3]);
  // print(
  //   "Box0 Collide? " +
  //     Box0 +
  //     "\nBox1 Collide? " +
  //     Box1 +
  //     "\nBox2 Collide? " +
  //     Box2 +
  //     "\nBox3 Collide? " +
  //     Box3 +
  //     "\nWindow size? " +
  //     windowWidth +
  //     " " +
  //     windowHeight
  // );
  
}

/* input translator function!

instead of trying to rework all of the collsion, 
it'll be easier to just translate input from either input into 2 numbers that can be used for button collision checks.
This should let touchscreen devices interact, which means this retarded program will just barely function.

this is going to be fucking retarded.
*/

function mouseReleased() {
  inputPosition.x = mouseX;
  inputPosition.y = mouseY;
  print(inputPosition);
  isClicked = true;
}

function touchStarted() {
  //print(touches.x + touches.y);
  inputPosition.x = touches.x;
  inputPosition.y = touches.y;
  isClicked = true;
  print(touches);
}


function modelLoaded() {
  gameState = 0;
}
function mathFact() {
  //noLoop();
  num1 = round(random(9));
  num2 = round(random(9));
  solution = num1 * num2;
  fill(0);
  stroke(0);
  CorrectChoice = round(random(0, 3));
  print(CorrectChoice);

  //Randomly chooses the correct choice and makes false answers for wrong choices.
  //This is stupid.

  if (CorrectChoice == 0) {
    Multi[CorrectChoice] = solution;
  }

  // Multi[0] = 0;
  // Multi[1] = 1;
  // Multi[2] = 2;
  // Multi[3] = 3;
  else {
    Multi[0] = round(random(0, 99));
    while (Multi[0] == solution) {
      Multi[0] = round(random(0, 99));
    }
  }
  if (CorrectChoice == 1) {
    Multi[CorrectChoice] = solution;
  } else {
    Multi[1] = round(random(0, 99));
    while (Multi[1] == solution) {
      Multi[1] = round(random(0, 99));
    }
  }
  if (CorrectChoice == 2) {
    Multi[CorrectChoice] = solution;
  } else {
    Multi[2] = round(random(0, 99));
    while (Multi[2] == solution) {
      Multi[2] = round(random(0, 99));
    }
    if (CorrectChoice == 3) {
      Multi[CorrectChoice] = solution;
    } else {
      Multi[3] = round(random(0, 99));
      while (Multi[3] == solution) {
        Multi[3] = round(random(0, 99));
      }
    }
  }
}

function mathSolution() {
  if (inp.value() == solution) {
    // div1.hide();
    // inp.hide();
    // loop();
    Correct = true;

    inp.value("");
  }
}

function wrongAnswer() {
  GriddyPercent = 0;
  waitTime = 0;
  runClick = false;
}

function griddyMeter() {
  GriddyPercent += GriddyNumber;
  //print(    "Griddy Percent: " + GriddyPercent + "\n Griddy Number: " + GriddyNumber );
  if (GriddyPercent >= 100) {
    griddyComplete();
  }
}
function griddyComplete() {
  GriddyPercent = 0;
  GriddyNumber = GriddyNumber * 0.75;
  dopamine += 50 * multiplier;
}

function checkClick() {
  //print("running");
  if (isClicked) {
    if (gameState == 0) {
      if (Box0 || Box1 || Box2 || Box3) {
        switch (CorrectChoice) {
          case 0:
            print("\nchose 0");
            if (Box0) {
              Correct = true;
            } else {
              NewProblem = true;
              wrongAnswer();
            }
            break;
          case 1:
            print("\nchose 1");
            if (Box1) {
              Correct = true;
            } else {
              NewProblem = true;
              wrongAnswer();
            }
            break;
          case 2:
            print("\nchose 2");
            if (Box2) {
              Correct = true;
            } else {
              NewProblem = true;
              wrongAnswer();
            }
            break;
          case 3:
            print("\nchose 3");
            if (Box3) {
              Correct = true;
            } else {
              NewProblem = true;
              wrongAnswer();
            }
            break;
        }
      }
    }
    if (gameState == 1) {
      if (Box0 || Box1 || Box2 || Box3) {
        if (Box0 == true) {
          if (dopamine >= UpgradePrice[0]) {
            dopamine -= UpgradePrice[0];
            UpgradePrice[0] += round(UpgradePrice[0] * 0.25);
            AutoDopa += 1;
          }
        }
      }
      if (Box1 == true) {
        if (dopamine >= UpgradePrice[1]) {
          dopamine -= UpgradePrice[1];
          UpgradePrice[1] += round(UpgradePrice[1] * 0.25);
          multiplier += 1;
        }
      }
    }
    if (menuButton) {
      print("\nClicked Menu button");
      switch (gameState) {
        case 0:
          gameState = 1;
          break;
        case 1:
          gameState = 0;
          break;
      }
    }
  isClicked = false;
  }
}