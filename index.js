$(document).ready(function(){
  $('#email').on('click', function() {
    $(this).css({
      borderColor: '#4dce7d'
    });
  });
  $('#password').on('click', function() {
    $(this).css({
      borderColor: '#4dce7d'
    });
  });
});

let btn = document.querySelector('button');
btn[0].on('click', function(){
    this.innerHTML = 'Hi world';
})
