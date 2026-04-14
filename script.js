// inputs
const loan = document.getElementById("l1");
const ai = document.getElementById("l2");
const lt = document.getElementById("l3");

// outputs
const mp = document.getElementById("m1");
const tp = document.getElementById("m2");
const ti = document.getElementById("m3");

const btn = document.getElementById("btn1");

// initialize display values
mp.setAttribute("data-val", "$0.00");
tp.setAttribute("data-val", "$0.00");
ti.setAttribute("data-val", "$0.00");

btn.addEventListener("click", cal);

function cal() {
  const P = parseFloat(loan.value);
  const annualRate = parseFloat(ai.value);
  const years = parseFloat(lt.value);

  if (isNaN(P) || isNaN(annualRate) || isNaN(years) || P <= 0 || annualRate <= 0 || years <= 0) {
    alert("Please enter valid values greater than zero.");
    return;
  }

  const r = annualRate / 12 / 100;
  const n = years * 12;

  const EMI = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = EMI * n;
  const totalInterest = totalPayment - P;

  // use setAttribute so CSS ::after content picks up the values
  mp.setAttribute("data-val", "$" + EMI.toFixed(2));
  tp.setAttribute("data-val", "$" + totalPayment.toFixed(2));
  ti.setAttribute("data-val", "$" + totalInterest.toFixed(2));
}

// also trigger on Enter key
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") cal();
});