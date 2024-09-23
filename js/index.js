const donationSection = document.getElementById("donation-section");
const historySection = document.getElementById("history-section");

const noakhaliDonation = document.getElementById("noakhali-donation");
const feniDonation = document.getElementById("feni-donation");
const quotaDonation = document.getElementById("quota-donation");

function adjustHistoryPage() {
  const headerHeight =
    document.querySelector("header").offsetHeight +
    parseInt(getComputedStyle(document.querySelector("header")).marginTop) +
    parseInt(getComputedStyle(document.querySelector("header")).marginBottom);

  const footerHeight =
    document.querySelector("footer").offsetHeight +
    parseInt(getComputedStyle(document.querySelector("footer")).marginTop) +
    parseInt(getComputedStyle(document.querySelector("footer")).marginBottom);

  const mainHeight =
    parseInt(getComputedStyle(document.querySelector("main")).marginTop) +
    parseInt(getComputedStyle(document.querySelector("main")).marginBottom);

  const viewportHeight = window.innerHeight;

  const contentHeight =
    viewportHeight - headerHeight - footerHeight - mainHeight;

  historySection.style.minHeight = `${contentHeight}px`;
}

document.getElementById("blog-btn").addEventListener("click", () => {
  console.log("click");
  location.href = "./blog.html";
});

//validating all the inputs, only accepts numbers and floats.
function validate(str) {
  let flag = 0;

  for (const letter of str) {
    if (letter === ".") {
      flag++;
      continue;
    }
    if (!(letter >= "0" && letter <= "9")) return false;
  }
  return flag <= 1 ? true : false;
}

//creating a node for history item and returning it

function createHistory(inputAmountNumber, date, id) {
  document.getElementById("no-donation").classList.add("hidden");

  const title = document.getElementsByClassName("card-title")[id - 1].innerText;

  const div = document.createElement("div");
  div.classList.add("p-4", "border-2", "rounded-lg");

  const h2 = document.createElement("h2");
  h2.classList.add("mb-4", "font-extrabold", "text-xl");
  h2.innerText = `${inputAmountNumber} Taka is Donated to "${title}".`;

  const span = document.createElement("span");
  span.classList.add("text-sm");
  span.innerText = `Date : ${date}`;

  div.appendChild(h2);
  div.appendChild(span);
  return div;
}

document.getElementById("donation-btn-nav").addEventListener("click", () => {
  document.getElementById("donation-btn-nav").classList.add("bg-[#B4F461]");
  document.getElementById("history-btn-nav").classList.remove("bg-[#B4F461]");
  donationSection.classList.remove("hidden");
  historySection.classList.add("hidden");
});

document.getElementById("history-btn-nav").addEventListener("click", () => {
  document.getElementById("history-btn-nav").classList.add("bg-[#B4F461]");
  document.getElementById("donation-btn-nav").classList.remove("bg-[#B4F461]");
  donationSection.classList.add("hidden");
  historySection.classList.remove("hidden");
  adjustHistoryPage();
});

noakhaliDonation.addEventListener("click", () => {
  let inputAmount = document.getElementById("noakhali-input-amount").value;
  let currentMoney = document.getElementById("current-money").innerText;
  let noakhaliTotalDonationNumber = Number(
    document.getElementById("noakhali-total-donation").innerText
  );

  if (!validate(inputAmount)) {
    alert("please input a valid amount");
    document.getElementById("noakhali-input-amount").value = "";
    return;
  }
  let inputAmountNumber = Number(inputAmount);
  let currentMoneyNumber = Number(currentMoney);

  if (inputAmountNumber === 0.0) {
    alert("Donate some positive amount please");
    document.getElementById("noakhali-input-amount").value = "";
    return;
  }

  if (inputAmountNumber > currentMoneyNumber) {
    alert("You don't have sufficient balance");
    document.getElementById("noakhali-input-amount").value = "";
    return;
  }
  currentMoneyNumber -= inputAmountNumber;
  noakhaliTotalDonationNumber += inputAmountNumber;
  document.getElementById("current-money").innerText = currentMoneyNumber;
  document.getElementById("noakhali-total-donation").innerText =
    noakhaliTotalDonationNumber;

  document.getElementById("noakhali-input-amount").value = "";

  document.getElementById("my_modal_5").showModal();
  const date = new Date();
  //   historySection.innerHTML += `
  //         <div class="p-4 border-2 rounded-lg">
  //           <h2 class="mb-4 font-extrabold text-xl">
  //             ${inputAmountNumber} Taka is Donated for flood at Noakhali, Bangladesh
  //           </h2>
  //           <span class="text-sm">Date : ${date}</span>
  //         </div>
  //         `;
  //   const div = document.createElement("div");
  //   div.classList.add("p-4", "border-2", "rounded-lg");

  //   const h2 = document.createElement("h2");
  //   h2.classList.add("mb-4", "font-extrabold", "text-xl");
  //   h2.innerText = `${inputAmountNumber} Taka is Donated for flood at Noakhali, Bangladesh`;

  //   const span = document.createElement("span");
  //   span.classList.add("text-sm");
  //   span.innerText = `Date : ${date}`;

  //   div.appendChild(h2);
  //   div.appendChild(span);
  historySection.insertBefore(
    createHistory(inputAmountNumber, date, 1),
    historySection.firstElementChild
  );
});

feniDonation.addEventListener("click", () => {
  let inputAmount = document.getElementById("feni-input-amount").value;
  let currentMoney = document.getElementById("current-money").innerText;
  let feniTotalDonationNumber = Number(
    document.getElementById("feni-total-donation").innerText
  );

  if (!validate(inputAmount)) {
    alert("please input a valid amount");
    document.getElementById("feni-input-amount").value = "";
    return;
  }
  let inputAmountNumber = Number(inputAmount);
  let currentMoneyNumber = Number(currentMoney);

  if (inputAmountNumber === 0) {
    alert("Donate some positive amount please");
    document.getElementById("feni-input-amount").value = "";
    return;
  }

  if (inputAmountNumber > currentMoneyNumber) {
    alert("You don't have sufficient balance");
    document.getElementById("feni-input-amount").value = "";
    return;
  }
  currentMoneyNumber -= inputAmountNumber;
  feniTotalDonationNumber += inputAmountNumber;
  document.getElementById("current-money").innerText = currentMoneyNumber;
  document.getElementById("feni-total-donation").innerText =
    feniTotalDonationNumber;

  document.getElementById("feni-input-amount").value = "";

  document.getElementById("my_modal_5").showModal();
  const date = new Date();
  //   historySection.innerHTML += `
  //         <div class="p-4 border-2 rounded-lg">
  //           <h2 class="mb-4 font-extrabold text-xl">
  //             ${inputAmountNumber} Taka is Donated for flood at Noakhali, Bangladesh
  //           </h2>
  //           <span class="text-sm">Date : ${date}</span>
  //         </div>
  //         `;
  //   const div = document.createElement("div");
  //   div.classList.add("p-4", "border-2", "rounded-lg");

  //   const h2 = document.createElement("h2");
  //   h2.classList.add("mb-4", "font-extrabold", "text-xl");
  //   h2.innerText = `${inputAmountNumber} Taka is Donated for flood at Noakhali, Bangladesh`;

  //   const span = document.createElement("span");
  //   span.classList.add("text-sm");
  //   span.innerText = `Date : ${date}`;

  //   div.appendChild(h2);
  //   div.appendChild(span);
  historySection.insertBefore(
    createHistory(inputAmountNumber, date, 2),
    historySection.firstElementChild
  );
});

quotaDonation.addEventListener("click", () => {
  let inputAmount = document.getElementById("quota-input-amount").value;
  let currentMoney = document.getElementById("current-money").innerText;
  let quotaTotalDonationNumber = Number(
    document.getElementById("quota-total-donation").innerText
  );

  if (!validate(inputAmount)) {
    alert("please input a valid amount");
    document.getElementById("quota-input-amount").value = "";
    return;
  }
  let inputAmountNumber = Number(inputAmount);
  let currentMoneyNumber = Number(currentMoney);

  if (inputAmountNumber === 0) {
    alert("Donate some positive amount please");
    document.getElementById("quota-input-amount").value = "";
    return;
  }

  if (inputAmountNumber > currentMoneyNumber) {
    alert("You don't have sufficient balance");
    document.getElementById("quota-input-amount").value = "";
    return;
  }
  currentMoneyNumber -= inputAmountNumber;
  quotaTotalDonationNumber += inputAmountNumber;
  document.getElementById("current-money").innerText = currentMoneyNumber;
  document.getElementById("quota-total-donation").innerText =
    quotaTotalDonationNumber;

  document.getElementById("quota-input-amount").value = "";

  document.getElementById("my_modal_5").showModal();
  const date = new Date();
  //   historySection.innerHTML += `
  //         <div class="p-4 border-2 rounded-lg">
  //           <h2 class="mb-4 font-extrabold text-xl">
  //             ${inputAmountNumber} Taka is Donated for flood at Noakhali, Bangladesh
  //           </h2>
  //           <span class="text-sm">Date : ${date}</span>
  //         </div>
  //         `;
  //   const div = document.createElement("div");
  //   div.classList.add("p-4", "border-2", "rounded-lg");

  //   const h2 = document.createElement("h2");
  //   h2.classList.add("mb-4", "font-extrabold", "text-xl");
  //   h2.innerText = `${inputAmountNumber} Taka is Donated for flood at Noakhali, Bangladesh`;

  //   const span = document.createElement("span");
  //   span.classList.add("text-sm");
  //   span.innerText = `Date : ${date}`;

  //   div.appendChild(h2);
  //   div.appendChild(span);
  historySection.insertBefore(
    createHistory(inputAmountNumber, date, 3),
    historySection.firstElementChild
  );
});
