const add = document.querySelector('#add');
const i1 = document.querySelector("#i1");
const i2 = document.getElementById("i2");
const result = document.getElementById("result");

add.addEventListener('click', function () {
  const sum = Number(i1.value) + Number(i2.value);
  result.innerHTML = sum;
  i1.value="";
  i2.value="";
});