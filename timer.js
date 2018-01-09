window.onload=function() {
  // Month,Day,Year,Hour,Minute,Second
  upTime('oct,18,2015,00:00:00'); // ****** Change this line!
};

function upTime(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);
  days=Math.floor(difference/(60*60*1000*24)*1);
  document.getElementById('days').firstChild.nodeValue = days;
  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}

$("#countup > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);
