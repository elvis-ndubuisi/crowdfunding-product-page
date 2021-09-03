const data = JSON.parse("/data.json");

let pledgeContext = `            <div>
<h3>Bamboo stand</h3>
<p class="pledge-price">Pledge $25 or more</p>
</div>
<p>
You get an ergonomic stand made of natural bamboo. You've helped
us launch our promotional campaign, and you'll be added to a
special Backer member list
</p>
<div>
<h2>191 <span class="superscript">left</span></h2>
<button class="btn-primary" id="selectReward">
  Select reward
</button>
</div>`;

const selectReward = document.querySelectorAll("#selectReward");
const projects = document.getElementById("projects");

const joinNew = () => {
  let projectContainer = document.createElement("article");
  projectContainer.innerHTML = pledgeContext;
  projects.appendChild(projectContainer);
};

// eventListeners
selectReward.forEach((rewardButton) => {
  rewardButton.addEventListener("click", joinNew);
});
