function addHoursToDate(date, minutesToAdd) {
  return (futureDate = new Date(date.getTime() + minutesToAdd * 60000));
}

let officeHoursInMinute = 525;
let startWorkingAt = '08:53:30';

let today = new Date();
today = (today.getMonth()+1) + ' ' +  today.getDate() + ' ' + today.getFullYear();


let startedAt = new Date(`${today} ${startWorkingAt} GMT+0600`);
let endAt = addHoursToDate(startedAt, officeHoursInMinute);

// pococ poco
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = endAt - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  console.log(days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ');
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    console.log('EXPIRED');
  }
}, 1000);
