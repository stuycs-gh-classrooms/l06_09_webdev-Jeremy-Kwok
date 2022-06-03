let center_x = 50;
let center_y= 50;
let lefteye_x= 35;
let lefteye_y= 40;
let righteye_x= 65;
let righteye_y= 40;
   
function setup() {
  createCanvas(400, 400);
  //var center_x,center_y,lefteye_x, lefteye_y, righteye_x, righteye_y;
}

function draw() {
  while (center_y<400){
    while (center_x < 400){
      fill(255, 255, 0);
      circle(center_x,center_y, 50);
      fill(0,0,255);
      circle(lefteye_x,lefteye_y, 10);
      circle(righteye_x,righteye_y, 10);
      fill(148, 0, 211);
      triangle(center_x-5, center_y-5, center_x+5, center_y-5, center_x, center_y+20);
      
      center_x += 100;
      lefteye_x += 100;
      righteye_x += 100;
    }
    center_x = 50;
     lefteye_x = 35;
     righteye_x = 65;
    center_y += 100;
     lefteye_y += 100;
     righteye_y += 100;
  }
}

//   while (center_y < 400) {
//     while (center_x < 400) {
//       avatar(center_x, center_y);
//       center_x += 100;
//     } //end of x while
//     center_x = 50;
//     center_y += 100;
//   } //end of y while
// } //end of setup


// void avatar(int center_x, int center_y) {
//   fill(255, 255, 0);
//   circle(center_x,center_y, 100);
//   fill(0,0,255);
//   circle((center_x-15),(center_y-10), 20);
//   circle((center_x+15),(center_y-10), 20);
//   fill(148, 0, 211);
//   triangle((center_x-10), (center_y), (center_x+10), (center_y), center_x, (center_y+40));
// }
