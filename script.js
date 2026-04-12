const age = document.getElementById("age");
const check = document.getElementById("checkbtn");
let res = document.getElementById("result");

check.addEventListener("click", function () {
  const userAge = Number(age.value);

  if (isNaN(userAge)) {
    res.innerHTML = "⚠️ Please enter a valid age";
    return;
  }

  if (userAge >= 18) {
    res.innerHTML = `
      ✅ You can drive <br>
      🗳️ You can vote <br>
      🍺 You can legally drink (in some countries) <br>
      💼 You are eligible for jobs <br>
      🪪 You can apply for driving license
    `;
  } else {
    res.innerHTML = `
      ❌ You cannot drive <br>
      ❌ You cannot vote <br>
      📚 Focus on studies <br>
      🎮 Enjoy your teenage life <br>
      ⏳ Wait till you turn 18
    `;
  }
});
