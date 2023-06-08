$(document).ready(function () {
  var $magic = $(".magic"),
    $scene = $(".scene"),
    hovered = $(".harryfh:hover");
  magicWHalf = $magic.width() / 2;

  $scene.on("mousemove", function (e) {
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;

    $magic.css({
      left: x - magicWHalf,
      top: y - magicWHalf,
    });
  });

  $scene.on("");
});
const containers = document.querySelectorAll('.slider-container');

containers.forEach(container => {
  container.querySelector('.slider').addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
  })
})