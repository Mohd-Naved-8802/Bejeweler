
// SIDE BAR CODE START
let open = document.querySelector(".fa-bars");
let close = document.querySelector(".fa-times");
let menu = document.querySelector(".menu-ul");

open.addEventListener("click", function () {
  menu.classList.toggle("show-sidebar");
  open.classList.toggle("d-none");
  open.classList.remove("d-block");
  close.classList.toggle("d-block");
});

close.addEventListener("click", function () {
  menu.classList.toggle("show-sidebar");
  close.classList.remove("d-block");
  close.classList.add("d-none");
  open.classList.remove("d-none");
  open.classList.add("d-block");
});
// SIDE BAR CODE END


// MENU BORDER BOTTOM CODE START
function borderBottom1(){
  document.getElementById("my-active1").classList.add("my-active");
  document.getElementById("my-active2").classList.remove("my-active");
  document.getElementById("my-active3").classList.remove("my-active");
  document.getElementById("my-active4").classList.remove("my-active");
  document.getElementById("my-active5").classList.remove("my-active");
}

function borderBottom2(){
  document.getElementById("my-active2").classList.add("my-active");
  document.getElementById("my-active1").classList.remove("my-active"); 
  document.getElementById("my-active3").classList.remove("my-active");
  document.getElementById("my-active4").classList.remove("my-active");
  document.getElementById("my-active5").classList.remove("my-active");
}

function borderBottom3(){
  document.getElementById("my-active3").classList.add("my-active");
  document.getElementById("my-active1").classList.remove("my-active"); 
  document.getElementById("my-active2").classList.remove("my-active"); 
  document.getElementById("my-active4").classList.remove("my-active");
  document.getElementById("my-active5").classList.remove("my-active");
}

function borderBottom4(){
  document.getElementById("my-active4").classList.add("my-active");
  document.getElementById("my-active1").classList.remove("my-active"); 
  document.getElementById("my-active2").classList.remove("my-active"); 
  document.getElementById("my-active3").classList.remove("my-active");
  document.getElementById("my-active5").classList.remove("my-active");
}

function borderBottom5(){
  document.getElementById("my-active5").classList.add("my-active");
  document.getElementById("my-active1").classList.remove("my-active"); 
  document.getElementById("my-active2").classList.remove("my-active"); 
  document.getElementById("my-active3").classList.remove("my-active");
  document.getElementById("my-active4").classList.remove("my-active");
}
// MENU BORDER BOTTOM CODE END


// COUNTER JS CODE
$('.counter').counterUp({
  delay: 2,
  time: 1000
});


