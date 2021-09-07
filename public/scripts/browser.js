const modalContainer = document.getElementById("modular-container");
const thanks = document.querySelector("#thanks");
const pledges = document.querySelector("#pledges");

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

const createdPledge = () => {
  const bidPledgeDOM = document.getElementById("bidPledgeDOM");
  const context = data
    .map((item) => {
      const { title, pledgeBid, desc, remains } = item;
      return `<div class="pledge">
      <div id="pledge">
        <div class="dot"><div class="dot-inner"></div></div>
        <div>
          <div class="pledge-header flx-rw">
            <div class="flx-rw">
              <h4>${title}</h4>
              <h4 class="pledge-price">${pledgeBid} more</h4>
            </div>
            <h4>${remains} <span class="top">left</span></h4>
          </div>
          <p>
            ${desc}
          </p>
        </div>
      </div>

      <!-- hidden context -->
      <div id="pledge-field">
        <hr />
        <div class="flx-rw">
          <input
            type="text"
            class="field"
            placeholder="Enter your pledge"
            name="bid"
          />
          <div>
            <button class="btn-plain" id="plusBid">$ 25</button>
            <button class="btn-primary" id="continue">Continue</button>
          </div>
        </div>
      </div>
    </div>`;
    })
    .join("");

  bidPledgeDOM.innerHTML = context;
};

// eventListeners
createArticle();
createdPledge();

const selectReward = document
  .querySelectorAll("#selectReward")
  .forEach((btn) => {
    btn.addEventListener("click", () => {
      // show modal
      modalContainer.classList.add("visible");
      pledges.classList.add("visible");
    });
  });

const pledge = document.querySelectorAll("#pledge").forEach((p) => {
  p.addEventListener("click", () => {
    p.nextElementSibling.classList.toggle("show-field");
  });
});

const dot = document.querySelectorAll(".dot").forEach((d) => {
  d.addEventListener("click", () => {
    d.classList.toggle("toggle");
  });
});

const plusBid = document.querySelectorAll("#plusBid").forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.previousElementSibling.value = 25;
  });
});

const modalClose = document
  .getElementById("close")
  .addEventListener("click", () => {
    modalContainer.classList.remove("visible");
  });

const contBtn = document.querySelectorAll("#continue").forEach((b) => {
  b.addEventListener("click", () => {
    thanks.classList.add("visible");
    pledges.classList.remove("visible");
  });
});

function hideModal() {
  modalContainer.classList.remove("visible");
  thanks.classList.remove("visible");
  pledges.classList.remove("visible");
}
const hide = document.getElementById("hide").addEventListener("click", () => {
  hideModal();
});
