setInterval(function() {
  main.res.x = window.innerWidth;
  main.res.y = window.innerHeight;


}, 16);

var start_logo = setInterval(function() {
  document.getElementById('main_logo').style.marginTop = ((main.res.y / 2) - (main.res.y * 0.20))+'px';
  document.getElementById('main_logo').style.marginLeft = ((main.res.x / 2) - (main.res.x * 0.10))+'px';
}, 16);

setTimeout(function() {
  main.logo.style.opacity = 0;
  setTimeout(function() {
    document.body.removeChild(document.getElementById('main_logo'));
  }, 1500);
  clearInterval(start_logo);
}, 2000)
