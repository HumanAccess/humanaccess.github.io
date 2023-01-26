// Responsive navigation
document.querySelector('[aria-expanded]').addEventListener("click", function() {
  var x = document.querySelector('[aria-expanded]');
  if (x.getAttribute("aria-expanded") == "false") {
    x.setAttribute("aria-expanded", "true");
  } else {
    x.setAttribute("aria-expanded", "false");
  }
});