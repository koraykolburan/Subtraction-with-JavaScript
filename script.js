let nu1 = document.getElementById("nu1");
let nu2 = document.getElementById("nu2");
let calculate = document.getElementById("calculate");
let account = document.getElementById("account");

let sub = (nu1, nu2) => {
  account.innerHTML = "Equal: " + (Number(nu1.value) - Number(nu2.value));
};
calculate.addEventListener("click", () => {
  sub(nu1, nu2);
});
