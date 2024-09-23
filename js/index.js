const donationSection = document.getElementById("donation-section");
const historySection = document.getElementById("history-section");

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
