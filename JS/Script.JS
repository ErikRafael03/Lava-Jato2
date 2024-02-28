var btn = document.querySelector("#Btn");

btn.addEventListener("click", function () {
    var text = btn.value;
    localStorage.setItem('valueText', text);
});
/**/
var btn2 = document.querySelector("#Btn2");

btn2.addEventListener("click", function () {
    var text2 = btn2.value;
    localStorage.setItem('valueText', text2);
});
/**/
var btn3 = document.querySelector("#Btn3");

btn3.addEventListener("click", function () {
    var text3 = btn3.value;
    localStorage.setItem('valueText', text3);
});
/**/
var btn4 = document.querySelector("#Btn4");

btn4.addEventListener("click", function () {
    var text4 = btn4.value;
    localStorage.setItem('valueText', text4);
});
/**/
var btn5 = document.querySelector("#Btn5");

btn5.addEventListener("click", function () {
    var text5 = btn5.value;
    localStorage.setItem('valueText', text5);
});
/**/
var btn6 = document.querySelector("#Btn6");

btn6.addEventListener("click", function () {
    var text6 = btn6.value;
    localStorage.setItem('valueText', text6);
});

var paragrafo = document.querySelector("#text");
paragrafo.textContent = localStorage.getItem('valueText');
/**/
var paragrafo2 = document.querySelector("#text2");
paragrafo2.textContent = localStorage.getItem('valueText');
/**/
var paragrafo3 = document.querySelector("#text3");
paragrafo3.textContent = localStorage.getItem('valueText');
/**/
var paragrafo4 = document.querySelector("#text4");
paragrafo4.textContent = localStorage.getItem('valueText');
/**/
var paragrafo5 = document.querySelector("#text5");
paragrafo5.textContent = localStorage.getItem('valueText');
/**/
var paragrafo6 = document.querySelector("#text6");
paragrafo6.textContent = localStorage.getItem('valueText');
/**/