function clock() {// We create a new Date object and assign it to a variable called "time".
var time = new Date(),
    
    // Access the "getHours" method on the Date object with the dot accessor. Zabiullah
    hours = time.getHours(),
    
    // Access the "getMinutes" method with the dot accessor.
    minutes = time.getMinutes(),
    seconds = time.getSeconds();
   //document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
   document.getElementById("clock").innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
  //frmDashboard.RichText0b379b405c3b842.text=harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}
setInterval(clock, 1000);