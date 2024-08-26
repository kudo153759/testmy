
// set up text to print, each item in array is new line
var aText = new Array(
    " hey, your love is like a warm embrace, ","comforting me in times of need and lifting me up when I am down."," I cherish you more than words can express. 💗"
 );
 var iSpeed = 100; // time delay of print out
 var iIndex = 0; // start printing array at this posision
 var iArrLength = aText[0].length; // the length of the text array
 var iScrollAt = 20; // start scrolling up at this many lines
  
 var iTextPos = 0; // initialise text position
 var sContents = ''; // initialise contents variable
 var iRow; // initialise current row
  
 function typewriter()
 {
  sContents =  ' ';
  iRow = Math.max(0, iIndex-iScrollAt);
  var destination = document.getElementById("typedtext");
  
  while ( iRow < iIndex ) {
   sContents += aText[iRow++] + '<br />';
  }
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if ( iTextPos++ == iArrLength ) {
   iTextPos = 0;
   iIndex++;
   if ( iIndex != aText.length ) {
    iArrLength = aText[iIndex].length;
    setTimeout("typewriter()", 500);
   }
  } else {
   setTimeout("typewriter()", iSpeed);
  }
 }
 
 
 typewriter();

 let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
 slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  } 
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
var x = document.getElementById("myAudio"); 
var y = document.getElementById("slide");
var b = document.getElementById("play");
var t = document.getElementById("typedtext");
y.style.display = "none";
t.style.display = "none";
function playAudio() { 
  x.play();
  var y = document.getElementById("slide");
  if (y.style.display === "block") {
    y.style.display = "none";
    t.style.display = "none"
    b.style.display = "block";
  } else {
    y.style.display = "block";
    t.style.display = "block";
    b.style.display = "none";
  }
}
   


function pauseAudio() { 
  x.pause(); 
} 
