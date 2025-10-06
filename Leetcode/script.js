// Leetcode Script

let start = document.getElementsByClassName("button-confirm")[0];
let output = document.getElementsByClassName("output")[0];
let totalSolved = document.getElementById("total-solved");
let easySolved = document.getElementById("easy-solved");
let mediumSolved = document.getElementById("medium-solved");
let hardSolved = document.getElementById("hard-solved");
let lastSolved = document.getElementById("last-solved");

async function fetchData() {
  let username = document.getElementById("user-input");
  let url = `https://leetcode-api-faisalshohag.vercel.app/${username.value}`;
  let response = await fetch(url);
  let data = await response.json();
  output.style.display = "block";
  console.log(data.totalQuestions);

  const totalPercentage = (data.totalSolved / data.totalQuestions) * 100;
  totalSolved.innerText =
    data.totalSolved + ` (${totalPercentage.toFixed(3)}% solved)`;

  const easyPercentage = (data.easySolved / data.totalEasy) * 100;
  easySolved.innerText =
    data.easySolved + ` (${easyPercentage.toFixed(3)}% solved)`;

  const mediumPercentage = (data.mediumSolved / data.totalMedium) * 100;
  mediumSolved.innerText =
    data.mediumSolved + ` (${mediumPercentage.toFixed(3)}% solved)`;

  const hardPercentage = (data.hardSolved / data.totalHard) * 100;
  hardSolved.innerText =
    data.hardSolved + ` (${hardPercentage.toFixed(3)}% solved)`;

  lastSolved.innerText =
    data.recentSubmissions[0].title +
    ` (${data.recentSubmissions[0].lang} is used)`;
}

start.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData();
});
