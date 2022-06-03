function setup() {
  createCanvas(100, 100);
  var center_x,center_y,lefteye_x, lefteye_y, righteye_x, righteye_y;
  let center_x=50;
  let center_y=50;
  let lefteye_x=35;
  let lefteye_y=40;
  let righteye_x=65;
  let righteye_y=40;
  fill(255, 255, 0);
  circle(center_x,center_y, 50);
  fill(0,0,255);
  circle(lefteye_x,lefteye_y, 10);
  circle(righteye_x,righteye_y, 10);
  fill(148, 0, 211);
  triangle((center_x-5), (center_y-5), (center_x+5), (center_y-5), center_x, (center_y+20));
}

function draw() {
  // put drawing code here
}
