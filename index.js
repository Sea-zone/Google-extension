document.getElementById("addbtn")?.addEventListener("click", function () {
  let var1 = document.getElementById("var1").value;
  let var2 = document.getElementById("var2").value;
  var result = document.getElementById("result");
  let ans = parseInt(var1) + parseInt(var2);
  result.textContent = `add: ${ans}`;
});
document.getElementById("subbtn")?.addEventListener("click", function () {
  let var1 = document.getElementById("var1").value;
  let var2 = document.getElementById("var2").value;
  var result = document.getElementById("result");
  let ans = parseInt(var1) - parseInt(var2);
  result.textContent = `sub: ${ans}`;
});
document.getElementById("mulbtn")?.addEventListener("click", function () {
  let var1 = document.getElementById("var1").value;
  let var2 = document.getElementById("var2").value;
  var result = document.getElementById("result");
  let ans = parseInt(var1) * parseInt(var2);
  result.textContent = `mul: ${ans}`;
});
document.getElementById("divbtn")?.addEventListener("click", function () {
  let var1 = document.getElementById("var1").value;
  let var2 = document.getElementById("var2").value;
  var result = document.getElementById("result");
  let ans = parseInt(var1) / parseInt(var2);
  result.textContent = `div: ${ans}`;
});

document.getElementById("vat")?.addEventListener("click", function () {
  let res;
  let var1 = document.getElementById("var1").value;
  let var2 = document.getElementById("var2");
  var result = document.getElementById("result");
  let tax = 0.13 * parseInt(var1);
  let netamount = parseInt(var1) - tax;
  if (var2.checked) {
    res = `Your tax is: ${tax} & Your netamount is: ${netamount}`;
  } else {
    res = `Your netamount is: ${netamount}`;
  }
  result.textContent = res;
});
