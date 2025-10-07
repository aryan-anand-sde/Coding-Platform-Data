// Leetcode Script

let start = document.getElementsByClassName("button-confirm")[0];
let output = document.getElementsByClassName("output")[0];
let error = document.getElementsByClassName("error")[0];
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
  if (!data.matchedUserStats) {
    error.style.display = "block";
    output.style.display = "none";
  } else {
    output.style.display = "block";
    error.style.display = "none";
    const totalPercentage = (data.totalSolved / data.totalQuestions) * 100;
    totalSolved.innerText =
      data.totalSolved +
      ` out of ${data.totalQuestions}` +
      ` (${totalPercentage.toFixed(3)}% solved)`;

    const easyPercentage = (data.easySolved / data.totalEasy) * 100;
    easySolved.innerText =
      data.easySolved +
      ` out of ${data.totalEasy}` +
      ` (${easyPercentage.toFixed(3)}% solved)`;

    const mediumPercentage = (data.mediumSolved / data.totalMedium) * 100;
    mediumSolved.innerText =
      data.mediumSolved +
      ` out of ${data.totalMedium}` +
      ` (${mediumPercentage.toFixed(3)}% solved)`;

    const hardPercentage = (data.hardSolved / data.totalHard) * 100;
    hardSolved.innerText =
      data.hardSolved +
      ` out of ${data.totalHard}` +
      ` (${hardPercentage.toFixed(3)}% solved)`;

    lastSolved.innerText =
      data.recentSubmissions[0].title +
      ` (${data.recentSubmissions[0].lang} is used)`;
  }
}

start.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData();
});
