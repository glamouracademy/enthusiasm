var howOften = 2; //number often in seconds to rotate
var current = 0; //start the counter at 0
var ns6 = document.getElementById&&!document.all; //detect netscape 6

// place your images, text, etc in the array elements here
var items = new Array();
    items[0]="<img alt='enthusiasm title' src='images/1.png' height='700' width='1200' border='0'/>"; 
    items[1]="<img alt='girl jumping' src='images/2.jpg' border='0'/>"; 
    items[2]="<img alt='group C jumping' src='images/3.jpg' height='700' width='1100' border='0'/>"; 
    items[3]="<img alt='image3 (9K)' src= 'images/4.jpg' height='700' width='1100' border='0'/>";
    items[4]="<img alt='image4 (9K)' src='images/5.jpg' height='700' width='1100' border='0'/>"; 
    items[5]="<img alt='image5 (18K)' src='images/6.jpg' height='700' width='1100' border='0'/>"; 
    items[6]="<img alt='image3 (9K)' src= 'images/7.jpg' height='900' width='700' border='0'/>"; 
    items[7]="<img alt='image4 (9K)' src='images/8.jpg' height='700' width='1100' border='0'/>"; 
    items[8]="<img alt='image5 (18K)' src='images/9.gif' height='900' width='700' border='0'/>";
    items[9]="<img alt='image3 (9K)' src= 'images/10.jpg' height='700' width='1100' border='0'/>"; 
    items[10]="<img alt='image4 (9K)' src='images/11.jpg' height='700' width='1100' border='0'/>"; 
    items[11]="<img alt='image5 (18K)' src='images/12.jpg' height='700' width='1100' border='0'/>"; 
    items[12]="<img alt='image5 (18K)' src='images/13.jpg' height='700' width='1100' border='0'/>"; 
    items[13]="<img alt='group C jumping' src='images/14.jpg' height='566' width='1136' border='0'/>"; 
    items[14]="<img alt='image1 (9K)' src='images/15.jpeg' height='700' width='700' border='0'/>"; 
    items[15]="<img alt='image2 (9K)' src='images/16.jpg' height='700' width='1100' border='0'/>"; 
    items[16]="<img alt='image3 (9K)' src= 'images/17.jpg' height='679' width='1037' border='0'/>"; 
    items[17]="<img alt='image4 (9K)' src='images/18.jpg' height='700' width='1000' border='0'/>"; 
    items[18]="<img alt='image5 (18K)' src='images/19.jpg' height='785' width='620' border='0'/>"; 
    items[19]="<img alt='image3 (9K)' src= 'images/20.jpg' height='800' width='580' border='0'/>"; 
    items[20]="<img alt='image4 (9K)' src='images/21.jpg' height='703' width='1000' border='0'/>"; 
    items[21]="<img alt='image5 (18K)' src='images/22.jpg' height='700' width='1100' border='0'/>"; 
    items[22]="<img alt='image3 (9K)' src= 'images/23.jpg' height='691' width='1152' border='0'/>"; 
    items[23]="<img alt='image4 (9K)' src='images/24.jpg' height='569' width='1152' border='0'/>"; 
    items[24]="<img alt='image5 (18K)' src='images/25.png' height='625' width='1060' border='0'/>"; 
    items[25]="<img alt='image3 (9K)' src= 'images/26.jpg' height='700' width='1000' border='0'/>"; 
    items[26]="<img alt='image4 (9K)' src='images/27.jpg' height='780' width='980' border='0'/>"; 
    items[27]="<img alt='image5 (18K)' src='images/28.jpg' height='326' width='900' border='0'/>"; 
    items[28]="<img alt='image3 (9K)' src= 'images/29.jpg' height='378' width='1062' border='0'/>"; 
    items[29]="<img alt='image4 (9K)' src='images/30.jpg' height='800' width='930' border='0'/>"; 
  
    

function rotater() {
    document.getElementById("placeholder").innerHTML = items[current];
    current = (current==items.length-1) ? 0 : current + 1;
    setTimeout("rotater()",howOften*1000);
}

// function rotater() {
//     if(document.layers) {
//         document.placeholderlayer.document.write(items[current]);
//         document.placeholderlayer.document.close();
//     }
//     if(ns6)document.getElementById("placeholderdiv").innerHTML=items[current]
//         if(document.all)
//             placeholderdiv.innerHTML=items[current];

//     current = (current==items.length-1) ? 0 : current + 1; //increment or reset
//     setTimeout("rotater()",howOften*1000);
// }
window.onload=rotater;
