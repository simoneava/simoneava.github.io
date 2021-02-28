
window.onload = function() {
  let blues = document.querySelectorAll(".blue");
   blues.forEach((element) => {
     let bounds = element.getBoundingClientRect();
     element.style.left =
       bounds.width / 2 +
       Math.random() * (window.innerWidth - bounds.width) +
       "px";
     element.style.top =
       bounds.height / 2 +
       Math.random() * (window.innerHeight - bounds.height) +
       "px";
   });
};


document.body.addEventListener('click', () => {
  console.log('hi');

let blues = document.querySelectorAll(".blue");
 blues.forEach((element) => {
   let bounds = element.getBoundingClientRect();
   element.style.left =
     bounds.width / 2 +
     Math.random() * (window.innerWidth - bounds.width) +
     "px";
   element.style.top =
     bounds.height / 2 +
     Math.random() * (window.innerHeight - bounds.height) +
     "px";
 });

});
