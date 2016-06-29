$(document).ready(function(){
  $(document).keydown(function(e) {
    switch(e.which) {
      case 37: //left
        main.css({'background': '#ccffcc'});
        break;

      case 38: //up
        main.css({'background': '#00f'});
        break;

      case 39: //right
        main.css({'background': '#0f0'});
        break;

      case 40: //down
        main.css({'background': '#f00'});
        break;

      default: return;
    }

    e.preventDefault();
  });
});
