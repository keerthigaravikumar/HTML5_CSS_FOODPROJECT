// document.getElementById("buttonclick").onclick = function () {
//   var str = document.getElementById("stringname").value;
//   alert(str);
//   var len = str.length;
//   alert(len);
// };
//event listener
document
  .getElementById("buttonclick")
  .addEventListener("click", function (Event) {
    alert("Inside eventfn");
    var ad = new Audio("music.mp3");
    ad.play();
  });
