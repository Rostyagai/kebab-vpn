// Pricing page functionality
const totalPlanPrice = document.getElementById("plan-total-price");
const planPeriod = document.getElementById("plan-period");
const planPrice = document.getElementById("plan-price");
const discountText = document.querySelector("#discount");
console.log(discountText);

const yOffset = -100;
const totalBox = document.querySelector(".payment-section__info-box");
const y = totalBox.getBoundingClientRect().top + window.pageYOffset + yOffset;

function CalculatePlanTotal(price, period, oldPrice) {
  let discount = 0;
  const total = (price * period).toFixed(2);
  if (oldPrice !== 0) {
    discount = (oldPrice * period - total).toFixed(2);
    discountText.style.visiblity = "visible";
    discountText.textContent = "Экономия $" + discount;
  } else {
    discountText.textContent = "";
  }
  planPeriod.textContent = period + "-месячный тариф";
  planPrice.textContent = "$" + price + "/мес";

  totalPlanPrice.textContent = "$" + total;
  window.scrollTo({ top: y, behavior: "smooth" });
  totalBox.classList.add("focus");
  setTimeout(() => {
    totalBox.classList.remove("focus");
  }, 1000);
  console.log("click");
}
