let modal = document.getElementById("myModal");
let btn = document.getElementById("myButton");
let span = document.getElementsByClassName("close")[0];
btn.addEventListener('click', function () {
    modal.style.display = "block";
});
span.addEventListener('click', function () {
    modal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }