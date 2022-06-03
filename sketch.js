function setup() {
  createCanvas(100, 100);
  var center_x,center_y,lefteye_x, lefteye_y, righteye_x, righteye_y;
  let center_x= int(50);
  let center_y= int(50);
  let lefteye_x= int(35);
  let lefteye_y= int(40);
  let righteye_x= int(65);
  let righteye_y= int(40);
}

function draw() {
  fill(int(255), int(255), int(0));
  circle(center_x,center_y, int(50));
  fill(int(0),int(0),int(255));
  circle(lefteye_x,lefteye_y, int(10));
  circle(righteye_x,righteye_y, int(10));
  fill(int(148), int(0), int(211));
  triangle(int(center_x-5), int(center_y-5), int(center_x+5), int(center_y-5), center_x, int(center_y+20));
}
