var banner_item = document.getElementById('banner_item'),
    banner_item_rng = 0,
    menu_button = document.getElementById('menu_button'),
    menu_b_press = 0,
    menu = document.getElementById('menu');


var banner_item_loop = setInterval(function() {

  banner_item.style.marginTop = '-500px';

  setTimeout(function() {
    banner_item_rng = Math.floor(Math.random() * 21) + 1;

    switch(banner_item_rng) {
      case 1:
        banner_item.innerHTML = 'A Watch';
        break;
      case 2:
        banner_item.innerHTML = 'A Phone';
        break;
      case 3:
        banner_item.innerHTML = 'A TV';
        break;
      case 4:
        banner_item.innerHTML = 'A Tablet';
        break;
      case 5:
        banner_item.innerHTML = 'A Chair';
        break;
      case 6:
        banner_item.innerHTML = 'A Desk';
        break;
      case 7:
        banner_item.innerHTML = 'A Pillow';
        break;
      case 8:
        banner_item.innerHTML = 'A Video Game';
        break;
      case 9:
        banner_item.innerHTML = 'A Coffee Maker';
        break;
      case 10:
        banner_item.innerHTML = 'A Fish Tank';
        break;
      case 11:
        banner_item.innerHTML = 'A Coffee Mug';
        break;
      case 12:
        banner_item.innerHTML = 'A T-Shirt';
        break;
      case 13:
        banner_item.innerHTML = 'An Airsoft Gun';
        break;
      case 14:
        banner_item.innerHTML = 'A Flash Drive';
        break;
      case 15:
        banner_item.innerHTML = 'A DVD';
        break;
      case 16:
        banner_item.innerHTML = 'A Computer Mouse';
        break;
      case 17:
        banner_item.innerHTML = 'A Keyboard';
        break;
      case 18:
        banner_item.innerHTML = 'A Microwave';
        break;
      case 19:
        banner_item.innerHTML = 'A Laptop';
        break;
      case 20:
        banner_item.innerHTML = 'A Game Console';
        break;
      case 21:
        banner_item.innerHTML = 'A Fishing Pole';
        break;
      default:
        banner_item.innerHTML = 'This.com';
    }

    banner_item.style.marginTop = '1px';
  }, 1000);

}, 5000);

menu_button.onmousedown = function() {
  menu_b_press += 1;
  if(menu_b_press % 2 === 1) {
    menu_button.src = 'assets/menu_button_down.png';

    openMenu();

  } else if(menu_b_press % 2 === 0) {
    menu_button.src = 'assets/menu_button.png';

    closeMenu();

  }
}

openMenu = function() {
  menu.style.right = '-2px';
  menu_button.style.right = '36%';
}

closeMenu = function() {
  menu.style.right = '-36%';
  menu_button.style.right = '12px';
}
