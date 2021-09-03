const modalContainer = document.getElementById("modular-container");
const thanks = document.querySelector("#thanks");
const pledges = document.querySelector("#pledges");

// callbacks
const createArticle = () => {
  const pladgeDOM = document.getElementById("pledgeDOM");
  const context = data
    .map((item) => {
      const { title, pledgeBid, desc, remains } = item;

      return `<article class="context">
      <div>
        <h3>${title}</h3>
        <p class="pledge-price">Pledge $${pledgeBid} or more</p>
      </div>
      <p>
        ${desc}
      </p>
      <div>
        <h2>${remains} <span class="superscript">left</span></h2>
        <button class="btn-primary" id="selectReward">
          Select reward
        </button>
      </div>
    </article>`;
    })
    .join("");

  pladgeDOM.innerHTML = context;
};

const showModal = () => {
  modalContainer.classList.toggle("visible");
  console.log("hitting");
};

// eventListeners
createArticle();
const selectReward = document.querySelectorAll("#selectReward");
selectReward.forEach((btn) => {
  btn.addEventListener("click", () => {
    // show modal
    modalContainer.classList.add("visible");
    pledges.classList.add("visible");
  });
});
