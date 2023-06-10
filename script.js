let stpbl1 = document.getElementById("stepbl1");
let stpbrdr1 = document.getElementById("stepbrdr1");

stpbl1.onmouseover = function() {
    stpbrdr1.style.borderBottom = "3px solid white";
}
stpbl1.onmouseout = function() {
    stpbrdr1.style.borderBottom = "3px solid black ";
}



let stpbl2 = document.getElementById("stepbl2");
let stpbrdr2 = document.getElementById("stepbrdr2");

stpbl2.onmouseover = function() {
    stpbrdr2.style.borderBottom = "3px solid white";
}
stpbl2.onmouseout = function() {
    stpbrdr2.style.borderBottom = "3px solid black ";
}



let stpbl3 = document.getElementById("stepbl3");
let stpbrdr3 = document.getElementById("stepbrdr3");

stpbl3.onmouseover = function() {
    stpbrdr3.style.borderBottom = "3px solid white";
}
stpbl3.onmouseout = function() {
    stpbrdr3.style.borderBottom = "3px solid black ";
}



//MODAL WINDOW
$(document).ready(function () {
    const popup = document.getElementById("mypopup");
    const popupToggle = document.getElementById("myBtn");
    const popupClose = document.querySelector(".close");
  
    popupToggle.onclick = function () {
      popup.style.display = "flex";
    };
  
    popupClose.onclick = function () {
      popup.style.display = "none";
    };
  
    window.onclick = function (event) {
      if (event.target == popup) {
        popup.style.display = "none";
      }
    };
  
    // считаем total price
    function calculate() {
      let sum = 0;
      $(".product-price-select").each(function () {
        sum += parseInt($(this).val());
      });
      $(".switch").each(function (i, element) {
        if (element.checked) {
          sum += parseInt($(this).val());
        }
      });
      $("#final_price").html(sum);
    }
  
    $(".product-price-select, .switch").on("input", function () {
      calculate();
    });
  });
