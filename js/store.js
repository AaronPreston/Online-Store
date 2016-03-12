var _lets = document.getElementById('lets'),
          lets_inf = document.getElementById('lets_info'),
    _get = document.getElementById('get'),
    _this = document.getElementById('this');

_lets.onmouseover = function() {
  _lets.src = 'assets/lets.png';
  lets_inf.style.marginTop = 0;
}

_lets.onmouseout = function() {
  _lets.src = 'assets/lets_hov.png';
  lets_inf.style.marginTop = '-500px';
}

_get.onmouseover = function() {
  _get.src = 'assets/get.png';
}

_get.onmouseout = function() {
  _get.src = 'assets/get_hov.png';
}

_this.onmouseover = function() {
  _this.src = 'assets/this.png';
}

_this.onmouseout = function() {
  _this.src = 'assets/this_hov.png';
}
