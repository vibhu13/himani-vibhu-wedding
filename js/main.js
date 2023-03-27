let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");


let countDown = () => {
  let futureDate = new Date(2023, 0, 27, 00, 00, 00, 0);
  //let futureDate = new Date("27 Jan 2023");
  let currentDate = new Date();
  let myDate = currentDate - futureDate;
  //console.log(myDate);

  if(myDate<0){
    var mytimer = document.getElementById('mytimer');
    mytimer.style.display = 'none';
  }

  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);

  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;

  let min = Math.floor(myDate / 1000 / 60) % 60;

  let sec = Math.floor(myDate / 1000) % 60;

  daysItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minItem.innerHTML = min;
  secItem.innerHTML = sec;
}

countDown()

setInterval(countDown, 1000)

