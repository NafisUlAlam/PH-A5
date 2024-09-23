const donationSection = document.getElementById("donation-section");
const historySection = document.getElementById("history-section");

const noakhaliDonation = document.getElementById("noakhali-donation");
const feniDonation = document.getElementById("feni-donation");
const quotaDonation = document.getElementById("quota-donation");

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

  if (inputAmountNumber === 0) {
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
  historySection.innerHTML += `
        <div class="p-4 border-2 rounded-lg">
          <h2 class="mb-4 font-extrabold text-xl">
            ${inputAmountNumber} Taka is Donated for flood at Noakhali, Bangladesh
          </h2>
          <span class="text-sm">Date : ${date}</span>
        </div>
        `;
});
